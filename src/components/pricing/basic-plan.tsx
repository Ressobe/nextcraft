import { ESubscriptionPeriod } from "@/types";
import { Check, X } from "lucide-react";
import { Button } from "../ui/button";

type TBasicPlanProps = {
  price: number;
  benefits?: string[];
  missing?: string[];
  planName?: string;
  subscriptionPeriod?: ESubscriptionPeriod;
};

export function BasicPlan({
  price,
  benefits,
  missing,
  subscriptionPeriod = ESubscriptionPeriod.Month,
  planName = "Basic",
}: TBasicPlanProps) {
  return (
    <div className="flex flex-col p-6 bg-zinc-900 shadow-lg rounded-lg justify-between border border-muted">
      <div>
        <h3 className="text-2xl font-bold text-center">{planName}</h3>
        <div className="mt-4 text-center ">
          <span className="text-4xl font-bold">${price}</span> /{" "}
          {subscriptionPeriod === ESubscriptionPeriod.Month ? "month" : "year"}
        </div>
        <ul className="mt-4 space-y-2">
          {benefits?.map((item) => {
            return (
              <li key={item} className="flex items-center gap-x-2">
                <Check className="text-green-500 w-10 h-10" />
                <span>{item}</span>
              </li>
            );
          })}
          {missing?.map((item) => {
            return (
              <li key={item} className="flex items-center gap-x-2">
                <X className="text-red-400 w-10 h-10" />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6">
        <Button className="w-full bg-background text-foreground hover:bg-secondary transition-all ">
          Get Started
        </Button>
      </div>
    </div>
  );
}
