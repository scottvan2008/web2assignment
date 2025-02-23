export default function Item({ name, quantity, category }) {
    return (
        <div className="bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100 max-w-xs my-2">
            <h3 className="text-base font-semibold text-blue-800 truncate">
                {name}
            </h3>
            <p className="text-sm text-blue-600">
                Buy <span className="font-medium">{quantity}</span> in{" "}
                <span className="italic">{category}</span>
            </p>
        </div>
    );
}
