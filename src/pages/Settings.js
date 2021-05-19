import React from 'react'
import { makeStyles, createStyles,Box, Grid, Button, InputAdornment, Input, InputLabel, FormControl, Typography, Select } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import TitleIcon from '@material-ui/icons/Title';
import BusinessIcon from '@material-ui/icons/Business';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PublicIcon from '@material-ui/icons/Public';
import Layout from '../components/Layout'
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
      },
    inputSection:{
       maxWidth:'400px',
       width: '100%',
       display:'block',
       marginBottom:theme.spacing(2),
     },
     subTitle: {
        borderBottom:'2px solid #027cc9',
        marginBottom:theme.spacing(2)
      },
    inputFieldButton:{
       maxWidth:'350px'
     }
 }));
const Settings = () => {
     const classes = useStyles();
     const [currency, setCurrency] = React.useState("PKR")

     const handleCurrency = (event) => {
        setCurrency(event.target.value);
      };
     const handleUpdate = (e)=>{
    e.preventDefault();
     }
    return (
        <Layout title="Settings">
             <form onSubmit={handleUpdate} autoComplete="off">
             <Grid container spacing={3} >
             <Grid item md={6} className="border">
             <Typography gutterBottom variant="subtitle2" className={classes.subTitle}>Company Detail</Typography>
                  {/* being companyName field */}
             <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="companyName">Company Name</InputLabel>
        <Input
          id="companyName"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <BusinessCenterIcon />
            </InputAdornment>
          }
          fullWidth
          required
        />
      </FormControl>
             {/* end companyName field */}
            {/* being phone field */}
             <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <Input
          id="phone"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          }
          fullWidth
          required
        />
      </FormControl>
             {/* end phone field */}
               {/* being Email field */}
               <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          startAdornment={
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          }
          fullWidth
          required
        />
      </FormControl>
             {/* end Email field */}
               {/* being Website field */}
               <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="website">Website</InputLabel>
        <Input
          id="website"
          type="url"
          startAdornment={
            <InputAdornment position="start">
              <PublicIcon />
            </InputAdornment>
          }
          fullWidth
        />
      </FormControl>
             {/* end Website field */}
              {/* being fax field */}
              <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="fax">Fax</InputLabel>
        <Input
          id="fax"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <ContactsIcon />
            </InputAdornment>
          }
          fullWidth

        />
      </FormControl>
             {/* end fax field */}
              {/* being street field */}
              <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="fax">Street</InputLabel>
        <Input
          id="street"
          multiline
          rows="1"
          startAdornment={
            <InputAdornment position="start"  style={{alignItems:'flex-end'}}>
              <BusinessIcon />
            </InputAdornment>
          }
          fullWidth

        />
      </FormControl>
             {/* end street field */}
            {/* being city field */}
            <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="city">City</InputLabel>
        <Input
          id="city"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <LocationCityIcon />
            </InputAdornment>
          }
          fullWidth

        />
      </FormControl>
             {/* end city field */} 
            {/* being state field */}
            <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="state">State</InputLabel>
        <Input
          id="state"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <ApartmentIcon />
            </InputAdornment>
          }
          fullWidth

        />
      </FormControl>
             {/* end state field */} 
                {/* being country field */}
                <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="country">Country</InputLabel>
        <Input
          id="country"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          }
          fullWidth
        />
      </FormControl>
             {/* end country field */}
             </Grid>
             <Grid item md={6} className="border">
             <Typography gutterBottom variant="subtitle2" className={classes.subTitle}>Logo &amp; Title</Typography>
                   {/* being siteLogo field */}
             <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="siteLogo">Site Logo</InputLabel>
        <Input
          id="siteLogo"
          type="file"
          fullWidth
          required
          
        />
      </FormControl>
             {/* end siteLogo field */}
                   {/* being siteTitle field */}
             <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="siteTitle">Site Title</InputLabel>
        <Input
          id="siteTitle"
          type="email"
          startAdornment={
            <InputAdornment position="start">
              <TitleIcon />
            </InputAdornment>
          }
          fullWidth
          required
          
        />
      </FormControl>
             {/* end siteTitle field */}
              {/* being paypalEmail field */}
             <FormControl mb={3} className={classes.inputSection}>
        <InputLabel htmlFor="paypalEmail">Paypal Email</InputLabel>
        <Input
          id="paypalEmail"
          type="email"
          startAdornment={
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          }
          fullWidth
          
        />
      </FormControl>
             {/* end paypalEmail field */}
              {/* being currency field */}
              <FormControl className={classes.inputSection}>
        <InputLabel htmlFor="currency">Currency</InputLabel>
        <Select
          native
          onChange={handleCurrency}
          value={currency}
          label="Currency"
          inputProps={{
            name: 'currency',
            id: 'currency',
          }}
          fullWidth
        >
         <option value="USD" defaultValue={currency && "selected" }>United States Dollars</option>
	<option value="EUR" defaultValue={currency && "selected" }>Euro</option>
	<option value="GBP" defaultValue={currency && "selected" }>United Kingdom Pounds</option>
	<option value="DZD" defaultValue={currency && "selected" }>Algeria Dinars</option>
	<option value="ARP" defaultValue={currency && "selected" }>Argentina Pesos</option>
	<option value="AUD" defaultValue={currency && "selected" }>Australia Dollars</option>
	<option value="ATS" defaultValue={currency && "selected" }>Austria Schillings</option>
	<option value="BSD" defaultValue={currency && "selected" }>Bahamas Dollars</option>
	<option value="BBD" defaultValue={currency && "selected" }>Barbados Dollars</option>
	<option value="BEF" defaultValue={currency && "selected" }>Belgium Francs</option>
	<option value="BMD" defaultValue={currency && "selected" }>Bermuda Dollars</option>
	<option value="BRR" defaultValue={currency && "selected" }>Brazil Real</option>
	<option value="BGL" defaultValue={currency && "selected" }>Bulgaria Lev</option>
	<option value="CAD" defaultValue={currency && "selected" }>Canada Dollars</option>
	<option value="CLP" defaultValue={currency && "selected" }>Chile Pesos</option>
	<option value="CNY" defaultValue={currency && "selected" }>China Yuan Renmimbi</option>
	<option value="CYP" defaultValue={currency && "selected" }>Cyprus Pounds</option>
	<option value="CSK" defaultValue={currency && "selected" }>Czech Republic Koruna</option>
	<option value="DKK" defaultValue={currency && "selected" }>Denmark Kroner</option>
	<option value="NLG" defaultValue={currency && "selected" }>Dutch Guilders</option>
	<option value="XCD" defaultValue={currency && "selected" }>Eastern Caribbean Dollars</option>
	<option value="EGP" defaultValue={currency && "selected" }>Egypt Pounds</option>
	<option value="FJD" defaultValue={currency && "selected" }>Fiji Dollars</option>
	<option value="FIM" defaultValue={currency && "selected" }>Finland Markka</option>
	<option value="FRF" defaultValue={currency && "selected" }>France Francs</option>
	<option value="DEM" defaultValue={currency && "selected" }>Germany Deutsche Marks</option>
	<option value="XAU" defaultValue={currency && "selected" }>Gold Ounces</option>
	<option value="GRD" defaultValue={currency && "selected" }>Greece Drachmas</option>
	<option value="HKD" defaultValue={currency && "selected" }>Hong Kong Dollars</option>
	<option value="HUF" defaultValue={currency && "selected" }>Hungary Forint</option>
	<option value="ISK" defaultValue={currency && "selected" }>Iceland Krona</option>
	<option value="INR" defaultValue={currency && "selected" }>India Rupees</option>
	<option value="IDR" defaultValue={currency && "selected" }>Indonesia Rupiah</option>
	<option value="IEP" defaultValue={currency && "selected" }>Ireland Punt</option>
	<option value="ILS" defaultValue={currency && "selected" }>Israel New Shekels</option>
	<option value="ITL" defaultValue={currency && "selected" }>Italy Lira</option>
	<option value="JMD" defaultValue={currency && "selected" }>Jamaica Dollars</option>
	<option value="JPY" defaultValue={currency && "selected" }>Japan Yen</option>
	<option value="JOD" defaultValue={currency && "selected" }>Jordan Dinar</option>
	<option value="KRW" defaultValue={currency && "selected" }>Korea (South) Won</option>
	<option value="LBP" defaultValue={currency && "selected" }>Lebanon Pounds</option>
	<option value="LUF" defaultValue={currency && "selected" }>Luxembourg Francs</option>
	<option value="MYR" defaultValue={currency && "selected" }>Malaysia Ringgit</option>
	<option value="MXP" defaultValue={currency && "selected" }>Mexico Pesos</option>
	<option value="NLG" defaultValue={currency && "selected" }>Netherlands Guilders</option>
	<option value="NZD" defaultValue={currency && "selected" }>New Zealand Dollars</option>
	<option value="NOK" defaultValue={currency && "selected" }>Norway Kroner</option>
	<option value="PKR" defaultValue={currency && "selected" }>Pakistan Rupees</option>
	<option value="XPD" defaultValue={currency && "selected" }>Palladium Ounces</option>
	<option value="PHP" defaultValue={currency && "selected" }>Philippines Pesos</option>
	<option value="XPT" defaultValue={currency && "selected" }>Platinum Ounces</option>
	<option value="PLZ" defaultValue={currency && "selected" }>Poland Zloty</option>
	<option value="PTE" defaultValue={currency && "selected" }>Portugal Escudo</option>
	<option value="ROL" defaultValue={currency && "selected" }>Romania Leu</option>
	<option value="RUR" defaultValue={currency && "selected" }>Russia Rubles</option>
	<option value="SAR" defaultValue={currency && "selected" }>Saudi Arabia Riyal</option>
	<option value="XAG" defaultValue={currency && "selected" }>Silver Ounces</option>
	<option value="SGD" defaultValue={currency && "selected" }>Singapore Dollars</option>
	<option value="SKK" defaultValue={currency && "selected" }>Slovakia Koruna</option>
	<option value="ZAR" defaultValue={currency && "selected" }>South Africa Rand</option>
	<option value="KRW" defaultValue={currency && "selected" }>South Korea Won</option>
	<option value="ESP" defaultValue={currency && "selected" }>Spain Pesetas</option>
	<option value="XDR" defaultValue={currency && "selected" }>Special Drawing Right (IMF)</option>
	<option value="SDD" defaultValue={currency && "selected" }>Sudan Dinar</option>
	<option value="SEK" defaultValue={currency && "selected" }>Sweden Krona</option>
	<option value="CHF" defaultValue={currency && "selected" }>Switzerland Francs</option>
	<option value="TWD" defaultValue={currency && "selected" }>Taiwan Dollars</option>
	<option value="THB" defaultValue={currency && "selected" }>Thailand Baht</option>
	<option value="TTD" defaultValue={currency && "selected" }>Trinidad and Tobago Dollars</option>
	<option value="TRL" defaultValue={currency && "selected" }>Turkey Lira</option>
	<option value="VEB" defaultValue={currency && "selected" }>Venezuela Bolivar</option>
	<option value="ZMK" defaultValue={currency && "selected" }>Zambia Kwacha</option>
	<option value="EUR" defaultValue={currency && "selected" }>Euro</option>
	<option value="XCD" defaultValue={currency && "selected" }>Eastern Caribbean Dollars</option>
	<option value="XDR" defaultValue={currency && "selected" }>Special Drawing Right (IMF)</option>
	<option value="XAG" defaultValue={currency && "selected" }>Silver Ounces</option>
	<option value="XAU" defaultValue={currency && "selected" }>Gold Ounces</option>
	<option value="XPD" defaultValue={currency && "selected" }>Palladium Ounces</option>
	<option value="XPT" defaultValue={currency && "selected" }>Platinum Ounces</option>
        </Select>
      </FormControl>
             {/* end currency field */}
             </Grid>
             <Grid item md={12}>
             <Box flexWrap="nowrap"  justifyContent="center" display='flex' component="section">  <Button variant="outlined" color="primary" type="submit" className={classes.inputFieldButton} size="large" disableElevation  fullWidth >Update</Button></Box>
             </Grid>
             </Grid>
             </form>
        </Layout>
    )
}

export default Settings
