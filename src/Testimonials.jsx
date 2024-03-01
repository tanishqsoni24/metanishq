import TestimonialCard from "./TestimonialCard";
import certificates from "./certifications.json";
import testimonials from "./testimonials.json";
export default function Testimonials() {
  return (
    <div>
      <div
        id="testimonials-container"
        className="certifications-container py-20 px-16 bg-slate-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-sky-500 text-center text-3xl font-bold mb-14">
          Testi<span className="text-white">Monials</span>
        </h3>
        <div className="certification-list flex flex-wrap justify-center gap-x-16 gap-y-10 mx-5 align-center">
          {testimonials.map((testi, index) => (
            <TestimonialCard
              key={index}
              Name={testi.name}
              Descp={testi.feedback}
              rating={testi.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
