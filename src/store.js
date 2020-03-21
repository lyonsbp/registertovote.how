import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateList: [
      {
        name: 'Alabama',
        abbreviation: 'AL',
        voteUrl: 'https://sos.alabama.gov/alabama-votes/voter/register-to-vote'
      },
      {
        name: 'Alaska',
        abbreviation: 'AK',
        voteUrl: 'https://voterregistration.alaska.gov/'
      },
      {
        name: 'Arizona',
        abbreviation: 'AZ',
        voteUrl:
          'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information'
      },
      {
        name: 'Arkansas',
        abbreviation: 'AR',
        voteUrl:
          'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information'
      },
      {
        name: 'California',
        abbreviation: 'CA',
        voteUrl: 'https://registertovote.ca.gov/'
      },
      {
        name: 'Colorado',
        abbreviation: 'CO',
        voteUrl:
          'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml'
      },
      {
        name: 'Connecticut',
        abbreviation: 'CT',
        voteUrl: 'https://voterregistration.ct.gov/'
      },
      {
        name: 'Delaware',
        abbreviation: 'DE',
        voteUrl: 'https://electionsncc.delaware.gov/votreg.shtml'
      },
      {
        name: 'District Of Columbia',
        abbreviation: 'DC',
        voteUrl:
          'https://www.dcboe.org/Voters/Register-To-Vote/Check-Voter-Registration-Status'
      },
      {
        name: 'Florida',
        abbreviation: 'FL',
        voteUrl: 'https://registertovoteflorida.gov'
      },
      {
        name: 'Georgia',
        abbreviation: 'GA',
        voteUrl: 'https://registertovote.sos.ga.gov/'
      },
      {
        name: 'Hawaii',
        abbreviation: 'HI',
        voteUrl: 'https://olvr.hawaii.gov/'
      },
      {
        name: 'Idaho',
        abbreviation: 'ID',
        voteUrl: 'https://apps.idahovotes.gov/OnlineVoterRegistration'
      },
      {
        name: 'Illinois',
        abbreviation: 'IL',
        voteUrl: 'https://ova.elections.il.gov/'
      },
      {
        name: 'Indiana',
        abbreviation: 'IN',
        voteUrl: 'https://www.in.gov/sos/elections/2403.htm'
      },
      {
        name: 'Iowa',
        abbreviation: 'IA',
        voteUrl:
          'https://sos.iowa.gov/elections/voterinformation/voterregistration.html'
      },
      {
        name: 'Kansas',
        abbreviation: 'KS',
        voteUrl: 'https://www.kdor.ks.gov/apps/voterreg/default.aspx'
      },
      {
        name: 'Kentucky',
        abbreviation: 'KY',
        voteUrl: 'https://elect.ky.gov/registertovote/Pages/default.aspx'
      },
      {
        name: 'Louisiana',
        abbreviation: 'LA',
        voteUrl:
          'https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx?'
      },
      {
        name: 'Maine',
        abbreviation: 'ME',
        voteUrl: 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html'
      },
      {
        name: 'Maryland',
        abbreviation: 'MD',
        voteUrl: 'https://elections.maryland.gov/voter_registration/index.html'
      },
      {
        name: 'Massachusetts',
        abbreviation: 'MA',
        voteUrl: 'https://www.sec.state.ma.us/ovr/'
      },
      {
        name: 'Michigan',
        abbreviation: 'MI',
        voteUrl:
          'https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8726_47669-175878--,00.html'
      },
      {
        name: 'Minnesota',
        abbreviation: 'MN',
        voteUrl: 'http://vote.minneapolismn.gov/voters/register'
      },
      {
        name: 'Mississippi',
        abbreviation: 'MS',
        voteUrl:
          'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx'
      },
      {
        name: 'Missouri',
        abbreviation: 'MO',
        voteUrl: 'https://www.sos.mo.gov/elections/govotemissouri/register'
      },
      {
        name: 'Montana',
        abbreviation: 'MT',
        voteUrl: 'https://sosmt.gov/elections/vote/'
      },
      {
        name: 'Nebraska',
        abbreviation: 'NE',
        voteUrl: 'https://www.nebraska.gov/apps-sos-voter-registration/'
      },
      {
        name: 'Nevada',
        abbreviation: 'NV',
        voteUrl:
          'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx'
      },
      {
        name: 'New Hampshire',
        abbreviation: 'NH',
        voteUrl: 'http://sos.nh.gov/HowRegVote.aspx'
      },
      {
        name: 'New Jersey',
        abbreviation: 'NJ',
        voteUrl:
          'https://www.state.nj.us/state/elections/voting-information.html'
      },
      {
        name: 'New Mexico',
        abbreviation: 'NM',
        voteUrl:
          'http://www.sos.state.nm.us/Voter_Information/Voter_Registration_Information.aspx'
      },
      {
        name: 'New York',
        abbreviation: 'NY',
        voteUrl: 'https://www.ny.gov/services/register-vote'
      },
      {
        name: 'North Carolina',
        abbreviation: 'NC',
        voteUrl: 'https://www.ncsbe.gov/Voters/Registering-to-Vote'
      },
      {
        name: 'North Dakota',
        abbreviation: 'ND',
        voteUrl: 'https://vip.sos.nd.gov/'
      },
      {
        name: 'Ohio',
        abbreviation: 'OH',
        voteUrl: 'https://www.sos.state.oh.us/elections/voters/register/'
      },
      {
        name: 'Oklahoma',
        abbreviation: 'OK',
        voteUrl: 'https://www.ok.gov/elections/Voter_Info/Register_to_Vote/'
      },
      {
        name: 'Oregon',
        abbreviation: 'OR',
        voteUrl:
          'https://sos.oregon.gov/voting/pages/updatevoterregistration.aspx'
      },
      {
        name: 'Pennsylvania',
        abbreviation: 'PA',
        voteUrl:
          'https://www.pavoterservices.pa.gov/pages/VoterRegistrationApplication.aspx'
      },
      {
        name: 'Rhode Island',
        abbreviation: 'RI',
        voteUrl: 'http://www.elections.state.ri.us/voting/registration.php'
      },
      {
        name: 'South Carolina',
        abbreviation: 'SC',
        voteUrl: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx'
      },
      {
        name: 'South Dakota',
        abbreviation: 'SD',
        voteUrl: 'https://sdsos.gov/elections-voting/'
      },
      {
        name: 'Tennessee',
        abbreviation: 'TN',
        voteUrl: 'https://sos.tn.gov/products/elections/register-vote'
      },
      {
        name: 'Texas',
        abbreviation: 'TX',
        voteUrl: 'https://www.votetexas.gov/register-to-vote/'
      },
      {
        name: 'Utah',
        abbreviation: 'UT',
        voteUrl: 'https://secure.utah.gov/voterreg/index.html?fromLocation='
      },
      {
        name: 'Vermont',
        abbreviation: 'VT',
        voteUrl:
          'https://www.sec.state.vt.us/elections/voters/registration.aspx'
      },
      {
        name: 'Virginia',
        abbreviation: 'VA',
        voteUrl: 'https://vote.elections.virginia.gov/VoterInformation'
      },
      {
        name: 'Washington',
        abbreviation: 'WA',
        voteUrl: 'https://www.sos.wa.gov/elections/register.aspx'
      },
      {
        name: 'West Virginia',
        abbreviation: 'WV',
        voteUrl: 'https://ovr.sos.wv.gov/Register/Landing'
      },
      {
        name: 'Wisconsin',
        abbreviation: 'WI',
        voteUrl: 'https://myvote.wi.gov/en-US/RegisterToVote'
      },
      {
        name: 'Wyoming',
        abbreviation: 'WY',
        voteUrl: 'http://soswy.state.wy.us/Elections/RegisteringToVote.aspx'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getStateList: state => {
      return state.stateList
    },
    getStateUrlByRegion: (state, urlKey) => region => {
      const stateObject = state.stateList.find(
        item => item.abbreviation === region.split('-')[1]
      )

      return stateObject ? stateObject[urlKey] : null
    }
  }
})
