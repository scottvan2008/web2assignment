export default function Item({ name, quantity, category }) {
    return (
        <div className="bg-green-100 m-3">
            <p>{name}</p>
            <p>
                Buy {quantity} in {category}
            </p>
        </div>
    );
}
