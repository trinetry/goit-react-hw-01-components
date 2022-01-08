import PropTypes from "prop-types";
import {
  TableStyled,
  TheadStyled,
  TbodyStyled,
  TrStyled,
  ThStyled,
  TdStyled,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TableStyled className="transaction-history">
      <TheadStyled>
        <TrStyled>
          <ThStyled>Type</ThStyled>
          <ThStyled>Amount</ThStyled>
          <ThStyled>Currency</ThStyled>
        </TrStyled>
      </TheadStyled>

      <TbodyStyled>
        {items.map((item) => (
          <TrStyled key={item.id}>
            <TdStyled>{item.type}</TdStyled>
            <TdStyled>{item.amount}</TdStyled>
            <TdStyled>{item.currency}</TdStyled>
          </TrStyled>
        ))}
      </TbodyStyled>
    </TableStyled>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;