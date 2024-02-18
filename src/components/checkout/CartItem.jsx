const CartItem = (props) => {
    const {title, subtitle, amount, isSuccess=false} = props;
    return (
        <>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{title}</h6>
                    <small className="text-muted">{subtitle}</small>
                </div>
                <span className="text-muted">${amount}</span>
            </li>
        </>
    );

}
export default CartItem ;