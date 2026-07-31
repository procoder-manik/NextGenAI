export default function SectionTitle({
    title,
    subtitle
}) {

    return (

        <div className="mb-12">

            <p className="text-blue-600 font-semibold mb-2">

                {subtitle}

            </p>

            <h2 className="text-4xl font-bold">

                {title}

            </h2>

        </div>

    )

}