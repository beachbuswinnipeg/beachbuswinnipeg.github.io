
const act = {
    template: `
    <div>
        The best way to act is to contact your city, provincial, and federal representatives
        <form onsubmit="return false">
            <label>Enter your postal code reps: <input type="text" v-model="postalCode" /></label>
            <input type="submit" value="Go" v-on:click="findReps()" />
        </form>
    </div>
    `,

    data: function() {
        return {
            postalCode: ""
        }
    },

    methods: {
        showReps: function(result) {
            console.log(result);
        },

        logError: function(error) {
            console.log(error);
        },

        findReps: function() {
            axios.get(`https://represent.opennorth.ca/postcodes/${this.formatPostalCode(this.postalCode)}/`, { crossDomain: true })
                .then(this.showReps)
                .catch(this.logError);
        },

        formatPostalCode: function(postalCode){
            return postalCode.replace(/[\s-]/, "").toUpperCase();
        }

    }
};
