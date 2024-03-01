export default function TestimonialCard(props) {
    return (
      <>
        <div
          className="card-container rounded-xl bg-slate-900 border-solid border-gray-50 p-5 flex flex-col items-center"
          style={{
            width: "20rem",
            border: "0.5px solid #0369a1",
            // borderRadius: "17rem",
          }}
        >
            <div className="image h-fit rounded border p-1 mb-2" style={{
                "borderRadius": "50%"
            }}>
                <img src="https://i.postimg.cc/hG7jK5xr/customer.png" alt="" style={{
                    // "height": "5rem",
                    "width": "3rem",
                    // "objectFit": "cover",
                    "borderRadius": "50%"
                }}/>
            </div>
            <div className="flex flex-col">
                <h4 className="text-sky-500 font-bold text-wrap px-1  mb-1 text-center">
                    @{props.Name} 
                </h4>
                <p className="text-gray-100 text-justify text-sm px-1">
                    {props.Descp}
                </p>
            </div>
        </div>
      </>
    );
  }
  