import Image from "next/image"

export default function Order({order}) {

    const {id, name, total, ordered} = order

  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-bold">Order: {id}</h3>
        <p className="text-lg font-bold my-10">Client: {name}</p>

        <div>
            {ordered.map(item => (
                <div
                    key={item.id}
                    item={item}
                    className="py-3 flex border-bottom last-of-type:border-0 items-center"
                >
                    <div className="w-32">
                        <Image 
                            width={400}
                            height={500}
                            src={`/assets/img/${item.image}.jpg`}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
