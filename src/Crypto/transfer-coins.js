import React from "react";
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import {useNavigate, useSearchParams } from "react-router-dom";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {transferCredits} from '../redux/actions/crypto-actions';

function TransferCoins() {
    const [searchParams, setSearchParams] = useSearchParams();
    const coinsData = useSelector((state) => state.crypto.coinsData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validationSchema = yup.object({
        coinName: yup
          .string('Enter Coin Name')
          .required('Coin Name is required'),
        amount: yup
          .string('Enter Amount to transfer')
          .required('Author is required'),
        transferAddress: yup
        .string('Enter Transfer Address')
        .required('Transfer Address is required'),
      });
  
      const formik = useFormik({
        initialValues: {
            coinName: searchParams.get("coin_name") || '',
            amount: '',
            transferAddress: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const coinName = values["coinName"];
            const amount = values["amount"];
            const transferAddress = values["transferAddress"];
            dispatch(transferCredits(coinName, amount));
            navigate("/crypto-dashboard");
        },
      });

      return(
        <div>
            <h1>Send Crypto Coins</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="coinName" style={{marginRight: '4px'}}>Coin Name: </label>
            <select
                        id="coinName"
                        name="coinName"
                        label="coinName"
                        value={formik.values.coinName}
                        onChange={formik.handleChange}
                        error={formik.touched.coinName && Boolean(formik.errors.coinName)}
                        >
            {coinsData.map((coin, index) => {
                return(
                    <option value={coin["cryptoCoin"]} label={coin["cryptoCoin"]} key={index}>
                            {coin["cryptoCoin"]}
                    </option>
                )
            })}
            </select>
                        <br/>
            <TextField
                        id="transferAddress"
                        type="text"
                        name="transferAddress"
                        label="transferAddress"
                        value={formik.values.transferAddress}
                        onChange={formik.handleChange}
                        error={formik.touched.transferAddress && Boolean(formik.errors.transferAddress)}
                        helperText={formik.touched.transferAddress && formik.errors.transferAddress}
                        />
                        <br/>
                    
                    <TextField
                        id="amount"
                        type="text"
                        name="amount"
                        label="amount"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        error={formik.touched.amount && Boolean(formik.errors.amount)}
                        helperText={formik.touched.amount && formik.errors.amount}
                        />
                        <br/>
                        <Button type="submit"
                            className="mt-2" style={{marginBottom: '8px', border: '1px solid', borderColor:'#2E76E5'}}>
                            Transfer Coins
                        </Button>
            </form>
        </div>
      )

}

export default TransferCoins;
