import React from "react";
import { MealList } from "./MealList";
import { PromoText } from "./PromoText";

export function Meals() {
   return (
      <React.Fragment>
         <PromoText />
         <MealList />
      </React.Fragment>
   )
}