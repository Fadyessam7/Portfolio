import { ReactNode } from "react";
interface IProps {
  title: string;
  description: string;
  children: ReactNode;
}
const ServiceCard = ({ title, children, description }: IProps) => {
  return (
    <div className="bg-[rgba(75,85,99,0.1)] md:col-span-4 rounded-md col-span-12 text-center pt-7 mx-2 space-y-4">
      {children}
      <p className="text-[#FD6F00] font-semibold">{title}</p>
      <p className="text-[rgba(75,85,99,0.9)] mb-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
