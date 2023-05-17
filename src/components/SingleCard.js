import { Card } from "antd";
const { Meta } = Card;
const SingleCard = ({ Person }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title={Person.name} description={Person.email} />
  </Card>
);
export default SingleCard;
