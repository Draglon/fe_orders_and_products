"use client";
import clsx from "clsx";

type ProductStatusProps = {
  active: boolean | number;
  status: string;
};

const ProductStatus = ({ active, status }: ProductStatusProps) => {
  return (
    <span
      className={clsx("status", { "status--active": active })}
      data-testid="productStatus"
    >
      {status}
    </span>
  );
};

export default ProductStatus;
