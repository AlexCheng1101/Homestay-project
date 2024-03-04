import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCabins } from "../cabins/useCabins";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { differenceInDays, isBefore, isDate, startOfToday } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../settings/useSettings";
import toast from "react-hot-toast";
import { useGuests } from "../../hooks/useGuests";
import { useCreateBooking } from "./useCreateBooking";
import { useCabin } from "../cabins/useCabin";

const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

function NewBookingForm() {
  const [wantsBreakfast, setWantsBreakfast] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const { cabins, isLoading } = useCabins();
  const { guests, isLoading: isLoadingGuests } = useGuests();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const { createBooking, isLoading: isCreating } = useCreateBooking();
  const { cabin } = useCabin();
  const { id: cabinId } = cabin;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  if (isLoading || isLoadingSettings || isLoadingGuests) return <Spinner />;
  function onSubmit(data) {
    const numNights = differenceInDays(
      new Date(data.endDate),
      new Date(data.startDate)
    );
    const today = startOfToday();
    //Filtering dates
    if (numNights < 1) {
      toast.error("入住日期必須在退房日期前");
      return;
    }
    if (numNights < settings.minBookingLength) {
      toast.error(
        `最短入住天數為${settings.minBookingLength}日`
      );
      return;
    }
    if (numNights > settings.maxBookingLength) {
      toast.error(
        `最常入住天數為${settings.maxBookingLength}日`
      );
      return;
    }
    if (isBefore(new Date(data.startDate), today)) {
      toast.error("入住日期請選擇今日之後的日期");
      return;
    }
    //cabinPrice
    const reservedCabin = cabins
      .filter((cabin) => cabin.id === Number(data.cabinId))
      .at(0);
    const cabinPrice =
      (reservedCabin.regularPrice - reservedCabin.discount) * numNights;

    //extrasPrice
    const extrasPrice = wantsBreakfast
      ? settings.breakfastPrice * numNights * data.numGuests
      : 0;
    //totalPrice
    const totalPrice = cabinPrice + extrasPrice;
    const finalData = {
      ...data,
      cabinPrice,
      extrasPrice,
      totalPrice,
      isPaid,
      numNights,
      cabinId: Number(data.cabinId),
      numGuests: Number(data.numGuests),
      guestId: Number(data.guestId),
      hasBreakfast: wantsBreakfast,
      status: "unconfirmed",
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    };
    createBooking(finalData, {
      onSuccess: (data) => {
        navigate(`/`);
      },
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="入住日期" error={errors?.startDate?.message}>
        <Input
          disabled={isCreating}
          type="date"
          id="startDate"
          {...register("startDate", {
            required: "此欄位為必需填選",
            validate:
              isDate(getValues().startDate) || "請選擇有效日期",
          })}
        />
      </FormRow>
      <FormRow label="退房日期" error={errors?.endDate?.message}>
        <Input
          disabled={isCreating}
          type="date"
          id="endDate"
          {...register("endDate", {
            required: "此欄位為必需填選",
            validate:
              isDate(getValues().endDate) || "請選擇有效日期",
          })}
        />
      </FormRow>
      <FormRow label="人數" error={errors?.numGuests?.message}>
        <Input
          disabled={isCreating}
          type="number"
          min={1}
          defaultValue={1}
          id="numGuests"
          {...register("numGuests", {
            required: "此欄位為必需填選",
            min: {
              value: 1,
              message: "最小人數為1",
            },
            max: {
              value: settings.maxGuestsPerBooking,
              message: `最大人數為 ${settings.maxGuestsPerBooking}`,
            },
          })}
        />
      </FormRow>
      <FormRow label="房型">
        <StyledSelect
          disabled={isCreating}
          id="cabinId"
          value={cabinId}
          {...register("cabinId")}
        >
          {cabins.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              {cabin.name}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      <FormRow label="用戶">
        <StyledSelect
          disabled={isCreating}
          id="guestId"
          {...register("guestId")}
        >
          {guests.map((guest) => (
            <option key={guest.id} value={guest.id}>
              {guest.fullName}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      <FormRow label="備註">
        <Input
          type="text"
          id="observations"
          disabled={isCreating}
          {...register("observations")}
        />
      </FormRow>
      <FormRow>
        <Checkbox
          id="breakfast"
          onChange={() => setWantsBreakfast((e) => !e)}
          disabled={isCreating}
        >
          包含早餐
        </Checkbox>
      </FormRow>
      <FormRow>
        <Checkbox
          id="paid"
          onChange={() => setIsPaid((e) => !e)}
          disabled={isCreating}
        >
          訂單已支付
        </Checkbox>
      </FormRow>
      <FormRow>
        <Button type="submit" variation="primary" disabled={isCreating}>
          提交
        </Button>
        <Button type="reset" variation="secondary" disabled={isCreating}>
          取消
        </Button>
      </FormRow>
    </Form>
  );
}

export default NewBookingForm;
