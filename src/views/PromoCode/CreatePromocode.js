import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';



const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '17px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "600",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	formControl: {

		minWidth: 150,
	}
});

const useStyles = makeStyles(styles);

const CreatePromocode = (props) => {
	const classes = useStyles();

	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(createpromo, validate);

	function createpromo() {
		// const formData={
		// 	title:values.title,
		// 	type:values.type,
		//     percentage:values.percentage,
		//     fixed:values.fixed,
		// 	start_datetime:values.start_datetime, 
		// 	end_datetime:values.end_datetime,
		// }
		//   console.log('Submitted');
		//   console.log(values);
		//   Router.History.goBack();
		props.history.goBack()
	}
	// console.log(values);

	const percentage = () => {
		return (
			<Grid item xs={12} sm={6} md={6} >
				<TextField
					required
					fullWidth
					id="percentage"
					name="percentage"
					label="Discount(%)"
					placeholder="%"
					value={values.percentage || ''}
					onChange={handleChange}

				/>
				{errors.percentage && (
					<p className="help is-danger">{errors.percentage}</p>
				)}
			</Grid>
		)
	}

	const fixed = () => {
		return (
			<Grid item xs={12} sm={6} md={6} >
				<TextField
					required
					fullWidth
					id="fixed"
					name="fixed"
					label="Discount"
					placeholder="Rs"
					value={values.fixed || ''}
					onChange={handleChange}

				/>
				{errors.fixed && (
					<p className="help is-danger">{errors.fixed}</p>
				)}
			</Grid>
		)
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} md={8} >
					<Card style={{ marginTop: '24px' }}>
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
							<CardIcon color="success">
								<PersonAddIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Promo Code</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit} noValidate>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											required
											inputProps={{
												autoFocus: true
											}}
											id="title"
											name="title"
											label="Title"
											value={values.title || ''}
											changed={handleChange}

										/>
										{errors.title && (
											<p className="help is-danger">{errors.title}</p>
										)}

									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<TextField style={{ minWidth: 204 }}
											id="type"
											select
											name="type"
											label="Discount Type"
											value={values.type || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Percentage</MenuItem>
											<MenuItem value={20}>Flat</MenuItem>

										</TextField>
										{errors.type && (
											<p className="help is-danger">{errors.type}</p>
										)}
									</Grid>

									{values.type === 20
										? fixed()
										: percentage()}


									<Grid item xs={12} sm={6} md={6} >
										<TextField
											id="start_datetime"
											label="Start Date"
											type="date"
											name="start_datetime"
											value={values.start_datetime || ''} onChange={handleChange}
											className={classes.textField}
											InputLabelProps={{
												shrink: true
											}}
										/>
										{errors.start_datetime && (
											<p className="help is-danger">{errors.start_datetime}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<TextField
											id="end_datetime"
											label="End Date"
											type="date"
											name="end_datetime"
											value={values.end_datetime || ''} onChange={handleChange}
											className={classes.textField}
											InputLabelProps={{
												shrink: true
											}}
										/>
										{errors.end_datetime && (
											<p className="help is-danger">{errors.end_datetime}</p>
										)}
									</Grid>
								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit">Create</Button>
									<Button
										component={RouterLink}
										to="/promocode"
									>Cancel</Button>
								</CardFooter>
							</form>
						</CardBody>
					</Card>

				</Grid>
			</Grid>
		</div>
	);
}

export default CreatePromocode;