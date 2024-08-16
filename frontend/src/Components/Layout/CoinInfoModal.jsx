import {Divider, Flex, Tag, Typography} from 'antd'
import CoinInfo from './CoinInfo'


export default function CoinInfoModal({coin}){
    return(
        <>
            <CoinInfo coin={coin} withSymbol/>
            <Divider/>
            <Typography.Paragraph>
                <Typography.Text strong>1 Hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}> {coin.priceChange1h} </Tag>
                <Typography.Text strong>1 Day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}> {coin.priceChange1d} </Tag>
                <Typography.Text strong>1 Week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}> {coin.priceChange1w} </Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price Btc: </Typography.Text>
                {coin.priceBtc.toFixed(2)} Btc
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap.toFixed(0)}$
            </Typography.Paragraph>
            {coin.contractAddress !== coin.name && <Typography.Paragraph>
                <Typography.Text strong>Contract Address: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>}
        </>

    )
}