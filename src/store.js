import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateList: [
      {
        name: 'Alabama',
        abbreviation: 'AL',
        voteUrl: 'https://sos.alabama.gov/alabama-votes/voter/register-to-vote',
        coronaUrl:
          'https://www.labor.alabama.gov/COVID-19%20UC%20Changes%20March%2016%202020%20News%20Release.pdf'
      },
      {
        name: 'Alaska',
        abbreviation: 'AK',
        voteUrl: 'https://voterregistration.alaska.gov/',
        coronaUrl: 'http://doa.alaska.gov/dop/directorsOffice/covid19/'
      },
      {
        name: 'Arizona',
        abbreviation: 'AZ',
        voteUrl:
          'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information',
        coronaUrl: 'https://des.az.gov/services/coronavirus'
      },
      {
        name: 'Arkansas',
        abbreviation: 'AR',
        voteUrl:
          'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information',
        coronaUrl:
          'https://www.thv11.com/article/news/health/coronavirus/arkansas-to-make-it-easier-to-apply-for-unemployment/91-7bc702a3-5c43-4f20-9bb1-be55633f252a'
      },
      {
        name: 'California',
        abbreviation: 'CA',
        voteUrl: 'https://registertovote.ca.gov/',
        coronaUrl:
          'https://www.kqed.org/news/11806938/how-to-file-for-unemployment-in-california-during-the-coronavirus-pandemic'
      },
      {
        name: 'Colorado',
        abbreviation: 'CO',
        voteUrl:
          'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml',
        coronaUrl:
          'https://www.thedenverchannel.com/news/coronavirus/colorado-workers-affected-by-covid-19-closures-eligible-for-assistance'
      },
      {
        name: 'Connecticut',
        abbreviation: 'CT',
        voteUrl: 'https://voterregistration.ct.gov/',
        coronaUrl: 'http://www.ctdol.state.ct.us/UI-online/index.htm'
      },
      {
        name: 'Delaware',
        abbreviation: 'DE',
        voteUrl: 'https://electionsncc.delaware.gov/votreg.shtml',
        coronaUrl:
          'https://news.delaware.gov/2020/03/17/the-delaware-department-of-labor-expands-unemployment-benefits-to-workers-affected-by-the-covid-19-pandemic/'
      },
      {
        name: 'District Of Columbia',
        abbreviation: 'DC',
        voteUrl:
          'https://www.dcboe.org/Voters/Register-To-Vote/Check-Voter-Registration-Status',
        coronaUrl: ''
      },
      {
        name: 'Florida',
        abbreviation: 'FL',
        voteUrl: 'https://registertovoteflorida.gov',
        coronaUrl:
          'https://www.wctv.tv/content/news/Governor--Florida-workers-need-immediate-economic-relief-568874841.html'
      },
      {
        name: 'Georgia',
        abbreviation: 'GA',
        voteUrl: 'https://registertovote.sos.ga.gov/',
        coronaUrl:
          'https://dol.georgia.gov/blog/new-information-filing-unemployment-partial-claims-and-reemployment-services'
      },
      {
        name: 'Hawaii',
        abbreviation: 'HI',
        voteUrl: 'https://olvr.hawaii.gov/',
        coronaUrl: 'https://labor.hawaii.gov/blog/category/news/'
      },
      {
        name: 'Idaho',
        abbreviation: 'ID',
        voteUrl: 'https://apps.idahovotes.gov/OnlineVoterRegistration',
        coronaUrl: 'https://labor.idaho.gov/dnn'
      },
      {
        name: 'Illinois',
        abbreviation: 'IL',
        voteUrl: 'https://ova.elections.il.gov/',
        coronaUrl:
          'https://www2.illinois.gov/ides/Pages/COVID-19-and-Unemployment-Benefits.aspx'
      },
      {
        name: 'Indiana',
        abbreviation: 'IN',
        voteUrl: 'https://www.in.gov/sos/elections/2403.htm',
        coronaUrl: 'https://www.in.gov/dwd/19.htm'
      },
      {
        name: 'Iowa',
        abbreviation: 'IA',
        voteUrl:
          'https://sos.iowa.gov/elections/voterinformation/voterregistration.html',
        coronaUrl:
          'https://www.iowaworkforcedevelopment.gov/updates-and-resources-about-covid-19'
      },
      {
        name: 'Kansas',
        abbreviation: 'KS',
        voteUrl: 'https://www.kdor.ks.gov/apps/voterreg/default.aspx',
        coronaUrl:
          'https://www.getkansasbenefits.gov/NewsAndUpdates.aspx?NewsID=77'
      },
      {
        name: 'Kentucky',
        abbreviation: 'KY',
        voteUrl: 'https://elect.ky.gov/registertovote/Pages/default.aspx',
        coronaUrl:
          'https://www.wlky.com/article/unemployment-waiting-period-to-be-waived-in-kentucky-covid19-coronavirus/31665692'
      },
      {
        name: 'Louisiana',
        abbreviation: 'LA',
        voteUrl:
          'https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx?',
        coronaUrl:
          'http://www.laworks.net/PublicRelations/COVID_19_Information.asp'
      },
      {
        name: 'Maine',
        abbreviation: 'ME',
        voteUrl:
          'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html',
        coronaUrl: 'https://www.maine.gov/labor/covid19/'
      },
      {
        name: 'Maryland',
        abbreviation: 'MD',
        voteUrl: 'https://elections.maryland.gov/voter_registration/index.html',
        coronaUrl: 'https://www.dllr.state.md.us/employment/uicovidfaqs.shtml'
      },
      {
        name: 'Massachusetts',
        abbreviation: 'MA',
        voteUrl: 'https://www.sec.state.ma.us/ovr/',
        coronaUrl:
          'https://www.mass.gov/resource/information-on-unemployment-and-coronavirus-covid-19'
      },
      {
        name: 'Michigan',
        abbreviation: 'MI',
        voteUrl:
          'https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8726_47669-175878--,00.html',
        coronaUrl:
          'https://www.michigan.gov/coronavirus/0,9753,7-406-98163-521770--,00.html'
      },
      {
        name: 'Minnesota',
        abbreviation: 'MN',
        voteUrl: 'http://vote.minneapolismn.gov/voters/register',
        coronaUrl:
          'https://www.uimn.org/applicants/needtoknow/news-updates/covid-19.jsp'
      },
      {
        name: 'Mississippi',
        abbreviation: 'MS',
        voteUrl:
          'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx',
        coronaUrl:
          'https://mdes.ms.gov/news/2020/03/13/novel-coronavirus-covid-19-response/'
      },
      {
        name: 'Missouri',
        abbreviation: 'MO',
        voteUrl: 'https://www.sos.mo.gov/elections/govotemissouri/register',
        coronaUrl: 'https://labor.mo.gov/coronavirus'
      },
      {
        name: 'Montana',
        abbreviation: 'MT',
        voteUrl: 'https://sosmt.gov/elections/vote/',
        coronaUrl: 'http://www.dli.mt.gov/employer-covid-19-faq'
      },
      {
        name: 'Nebraska',
        abbreviation: 'NE',
        voteUrl: 'https://www.nebraska.gov/apps-sos-voter-registration/',
        coronaUrl: ''
      },
      {
        name: 'Nevada',
        abbreviation: 'NV',
        voteUrl:
          'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx',
        coronaUrl:
          'https://governor.nebraska.gov/press/gov-ricketts-issues-executive-order-loosen-unemployment-insurance-eligibility-requirements'
      },
      {
        name: 'New Hampshire',
        abbreviation: 'NH',
        voteUrl: 'http://sos.nh.gov/HowRegVote.aspx',
        coronaUrl: 'https://www.nhes.nh.gov/'
      },
      {
        name: 'New Jersey',
        abbreviation: 'NJ',
        voteUrl:
          'https://www.state.nj.us/state/elections/voting-information.html',
        coronaUrl:
          'https://www.nj.gov/labor/worker-protections/earnedsick/covid.shtml'
      },
      {
        name: 'New Mexico',
        abbreviation: 'NM',
        voteUrl:
          'http://www.sos.state.nm.us/Voter_Information/Voter_Registration_Information.aspx',
        coronaUrl: 'https://www.dws.state.nm.us/COVID-19-Info'
      },
      {
        name: 'New York',
        abbreviation: 'NY',
        voteUrl: 'https://www.ny.gov/services/register-vote',
        coronaUrl: 'https://labor.ny.gov/unemploymentassistance.shtm'
      },
      {
        name: 'North Carolina',
        abbreviation: 'NC',
        voteUrl: 'https://www.ncsbe.gov/Voters/Registering-to-Vote',
        coronaUrl: 'https://des.nc.gov/apply-unemployment'
      },
      {
        name: 'North Dakota',
        abbreviation: 'ND',
        voteUrl: 'https://vip.sos.nd.gov/',
        coronaUrl: 'https://www.jobsnd.com/news/dealing-covid-19'
      },
      {
        name: 'Ohio',
        abbreviation: 'OH',
        voteUrl: 'https://www.sos.state.oh.us/elections/voters/register/',
        coronaUrl: 'http://jfs.ohio.gov/ouio/CoronavirusAndUI.stm'
      },
      {
        name: 'Oklahoma',
        abbreviation: 'OK',
        voteUrl: 'https://www.ok.gov/elections/Voter_Info/Register_to_Vote/',
        coronaUrl: 'https://www.ok.gov/oesc/Claimants/'
      },
      {
        name: 'Oregon',
        abbreviation: 'OR',
        voteUrl:
          'https://sos.oregon.gov/voting/pages/updatevoterregistration.aspx',
        coronaUrl: 'https://www.oregon.gov/employ/Pages/COVID-19.aspx'
      },
      {
        name: 'Pennsylvania',
        abbreviation: 'PA',
        voteUrl:
          'https://www.pavoterservices.pa.gov/pages/VoterRegistrationApplication.aspx',
        coronaUrl: 'https://www.uc.pa.gov/Pages/covid19.aspx'
      },
      {
        name: 'Rhode Island',
        abbreviation: 'RI',
        voteUrl: 'http://www.elections.state.ri.us/voting/registration.php',
        coronaUrl:
          'http://www.dlt.state.ri.us/pdfs/COVID-19%20Workplace%20Fact%20Sheet.pdf'
      },
      {
        name: 'South Carolina',
        abbreviation: 'SC',
        voteUrl: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx',
        coronaUrl: 'https://dew.sc.gov/covid-hub'
      },
      {
        name: 'South Dakota',
        abbreviation: 'SD',
        voteUrl: 'https://sdsos.gov/elections-voting/',
        coronaUrl: 'https://dlr.sd.gov/ra/covid_19_ra_eligibility.aspx'
      },
      {
        name: 'Tennessee',
        abbreviation: 'TN',
        voteUrl: 'https://sos.tn.gov/products/elections/register-vote',
        coronaUrl:
          'https://www.tn.gov/workforce/general-resources/news/2020/3/11/information-about-tn-ui-benefits-and-coronavirus.html'
      },
      {
        name: 'Texas',
        abbreviation: 'TX',
        voteUrl: 'https://www.votetexas.gov/register-to-vote/',
        coronaUrl: 'https://www.tdi.texas.gov/wc/information/coronavirus.html'
      },
      {
        name: 'Utah',
        abbreviation: 'UT',
        voteUrl: 'https://secure.utah.gov/voterreg/index.html?fromLocation=',
        coronaUrl: 'https://jobs.utah.gov/covid19/'
      },
      {
        name: 'Vermont',
        abbreviation: 'VT',
        voteUrl:
          'https://www.sec.state.vt.us/elections/voters/registration.aspx',
        coronaUrl:
          'https://labor.vermont.gov/covid19/covid-19-frequently-asked-questions'
      },
      {
        name: 'Virginia',
        abbreviation: 'VA',
        voteUrl: 'https://vote.elections.virginia.gov/VoterInformation',
        coronaUrl:
          'https://www.governor.virginia.gov/media/governorvirginiagov/governor-of-virginia/pdf/Frequently-Asked-Questions-from-Workers-Regarding-COVID-19.pdf'
      },
      {
        name: 'Washington',
        abbreviation: 'WA',
        voteUrl: 'https://www.sos.wa.gov/elections/register.aspx',
        coronaUrl: 'https://esd.wa.gov/newsroom/covid-19'
      },
      {
        name: 'West Virginia',
        abbreviation: 'WV',
        voteUrl: 'https://ovr.sos.wv.gov/Register/Landing',
        coronaUrl: 'https://workforcewv.org/unemployment'
      },
      {
        name: 'Wisconsin',
        abbreviation: 'WI',
        voteUrl: 'https://myvote.wi.gov/en-US/RegisterToVote',
        coronaUrl: 'https://dwd.wisconsin.gov/covid19/public/ui.htm'
      },
      {
        name: 'Wyoming',
        abbreviation: 'WY',
        voteUrl: 'http://soswy.state.wy.us/Elections/RegisteringToVote.aspx',
        coronaUrl: 'http://www.wyomingworkforce.org/workers/ui/'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getStateList: state => {
      return state.stateList
    },
    getStateUrlByRegion: state => (region, urlKey) => {
      const stateObject = state.stateList.find(
        item => item.abbreviation === region.split('-')[1]
      )

      return stateObject ? stateObject[urlKey] : null
    }
  }
})
