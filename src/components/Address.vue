<template>
    <form class="address-form" @submit="submit" action="javascript:void(0);">
  <fieldset class="fieldset">
    <legend class="legend">Mailing address</legend>
    <p class="required-hint">Required fields are marked with an asterisk <abbr title="required" class="asterisk">*</abbr>.</p>
    <div class="container">
      <label class="label" for="mailing-address-1"
        >Street Address
        <abbr title="required" class="asterisk">*</abbr></label
      >
      <input
        v-model="address"
        class="street input"
        id="mailing-address-1"
        name="mailing-address-1"
        required
      />
    </div>
    <div class="container">
      <label class="label" for="apt-suite-other">Unit Type</label>
      <select class="selector" id="apt-suite-other" name="apt-suite-other">
        <option value>- Select -</option>
        <option value="APT">APT - Apartment</option>
        <option value="BSMT">BSMT - Basement</option>
        <option value="BLDG">BLDG - Building</option>
        <option value="DEPT">DEPT - Department</option>
        <option value="FL">FL - Floor</option>
        <option value="FRNT">FRNT - Front</option>
        <option value="HNGR">HNGR - Hanger</option>
        <option value="KEY">KEY - Key</option>
        <option value="LBBY">LBBY - Lobby</option>
        <option value="LOT">LOT - Lot</option>
        <option value="LOWR">LOWR - Lower</option>
        <option value="OFC">OFC - Office</option>
        <option value="PH">PH - Penthouse</option>
        <option value="PIER">PIER - Pier</option>
        <option value="REAR">REAR - Rear</option>
        <option value="RM">RM - Room</option>
        <option value="SIDE">SIDE - Side</option>
        <option value="SLIP">SLIP - Slip</option>
        <option value="SPC">SPC - Space</option>
        <option value="STOP">STOP - Stop</option>
        <option value="STE">STE - Suite</option>
        <option value="TRLR">TRLR - Trailer</option>
        <option value="UNIT">UNIT - Unit</option>
        <option value="UPPR">UPPR - Upper</option>
      </select>

    </div>
    <div class="container">
      <label class="label" for="apt-floor-suite-no">Unit Number</label>
      <input
        class="unit input"
        id="apt-floor-suite-no"
        name="apt-floor-suite-no"
      />
    </div>
    <div class="container">
      <label class="label" for="city"
        >City
        <abbr title="required" class="asterisk">*</abbr></label
      >
      <input v-model="city" class="city input" id="city" name="city" required />
    </div>
    <div class="container">

      <label class="label" for="state">State<abbr title="required" class="asterisk">*</abbr></label>

      <select v-model="state" class="state selector" id="state" name="state">
        <option value>- Select -</option>
        <option value="AL">AL - Alabama</option>
        <option value="AK">AK - Alaska</option>
        <option value="AS">AS - American Samoa</option>
        <option value="AZ">AZ - Arizona</option>
        <option value="AR">AR - Arkansas</option>
        <option value="CA">CA - California</option>
        <option value="CO">CO - Colorado</option>
        <option value="CT">CT - Connecticut</option>
        <option value="DE">DE - Delaware</option>
        <option value="DC">DC - District of Columbia</option>
        <option value="FL">FL - Florida</option>
        <option value="GA">GA - Georgia</option>
        <option value="GU">GU - Guam</option>
        <option value="HI">HI - Hawaii</option>
        <option value="ID">ID - Idaho</option>
        <option value="IL">IL - Illinois</option>
        <option value="IN">IN - Indiana</option>
        <option value="IA">IA - Iowa</option>
        <option value="KS">KS - Kansas</option>
        <option value="KY">KY - Kentucky</option>
        <option value="LA">LA - Louisiana</option>
        <option value="ME">ME - Maine</option>
        <option value="MD">MD - Maryland</option>
        <option value="MA">MA - Massachusetts</option>
        <option value="MI">MI - Michigan</option>
        <option value="MN">MN - Minnesota</option>
        <option value="MS">MS - Mississippi</option>
        <option value="MO">MO - Missouri</option>
        <option value="MT">MT - Montana</option>
        <option value="NE">NE - Nebraska</option>
        <option value="NV">NV - Nevada</option>
        <option value="NH">NH - New Hampshire</option>
        <option value="NJ">NJ - New Jersey</option>
        <option value="NM">NM - New Mexico</option>
        <option value="NY">NY - New York</option>
        <option value="NC">NC - North Carolina</option>
        <option value="ND">ND - North Dakota</option>
        <option value="MP">MP - Northern Mariana Islands</option>
        <option value="OH">OH - Ohio</option>
        <option value="OK">OK - Oklahoma</option>
        <option value="OR">OR - Oregon</option>
        <option value="PA">PA - Pennsylvania</option>
        <option value="PR">PR - Puerto Rico</option>
        <option value="RI">RI - Rhode Island</option>
        <option value="SC">SC - South Carolina</option>
        <option value="SD">SD - South Dakota</option>
        <option value="TN">TN - Tennessee</option>
        <option value="TX">TX - Texas</option>
        <option value="UM">UM - United States Minor Outlying Islands</option>
        <option value="UT">UT - Utah</option>
        <option value="VT">VT - Vermont</option>
        <option value="VI">VI - Virgin Islands</option>
        <option value="VA">VA - Virginia</option>
        <option value="WA">WA - Washington</option>
        <option value="WV">WV - West Virginia</option>
        <option value="WI">WI - Wisconsin</option>
        <option value="WY">WY - Wyoming</option>
        <option value="AA">AA - Armed Forces Americas</option>
        <option value="AE">AE - Armed Forces Africa</option>
        <option value="AE">AE - Armed Forces Canada</option>
        <option value="AE">AE - Armed Forces Europe</option>
        <option value="AE">AE - Armed Forces Middle East</option>
        <option value="AP">AP - Armed Forces Pacific</option>
      </select>
    </div>
    <div class="container">
      <label class="label" for="zip"
        >ZIP Code
        <abbr title="required" class="asterisk">*</abbr></label
      >
      <input
        class="zip input"
        id="zip"
        name="zip"
        pattern="[\d]{5}(-[\d]{4})?"
        required
      />
    </div>
    <input type="submit" class="submit-button">
  </fieldset>
</form>
</template>


<script>


export default {

    data() {
        return {
            address: null,
            city: null,
            state: null,
        }
    },

    methods: {
        submit() {
            const fullAddress = {
                streetAddress: this.address,
                city: this.city,
                state: this.state
            }
            console.log(fullAddress)
            this.$emit('checkout')
        }
    }
}

</script>

<style scoped>
.address-form {
  width: 45%;
}

.fieldset {
  border: 1px solid black;
  padding: 20px 10px 0 5%;
  display: flex;
  flex-direction: column;
}

.legend {
  color: navy;
  font-size: 1.5rem;
}

.required-hint {
  text-align: center;
  font-size: 0.8rem;
  color: black;
  margin: 0 0 10px 0;
}

.asterisk {
  color: deeppink;
  text-decoration: none;
  margin: 2px;
  font-size: 1rem;
}

.label {
  padding: 0 5px 0 0;
  display: inline;
}

.input {
  padding: 2px;
  display: inline;
}

.street {
  width: 55%;
}

.city, .unit {
  width: 45%;
}

.zip {
  width: 25%;
}

.selector {
  display: inline;
}

.state {
  width: 30%;
}

.container {
  margin: 5px 0 5px 10px;
  width: 80%;
}

.submit-button {
  display: block;
  cursor: pointer;
  margin: 20px 40%;
  width: 20%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  background-color: rgb(250, 226, 229);
  font-size: 1.2rem;
}

.submit-button:hover {
    color: navy;
    background-color: lavender;
}


@media screen and (max-width: 950px) {
.selector, .input {
  display: block;
  width: 100%;
}
}

@media screen and (max-width: 750px) {
  .address-form {
    width: 75%;
  }
}

@media screen and (max-width: 575px) {
  .submit-button {
  width: 30%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  background-color: rgb(250, 226, 229);
  font-size: 1rem;
}
}

</style>
