/**
 * Collection of external URLs used throughout the application
 */

interface Hrefs {
  github: string;
  linkedin: string;
  resume: string;
  robotics: string;
  newNav: string;
  newSummaryReport: string;
  newFormsExperience: string;
  newDashboardWidget: string;
}

const socialLinks = {
  github: 'https://github.com/archil-l',
  linkedin: 'https://www.linkedin.com/in/archil-l/',
  resume:
    'https://1drv.ms/b/c/21c15a5e07446ee2/EeJuRAdeWsEggCEilwIAAAABa9B95fj4EiAnRxn3v3Y04w?e=Oa3sdC',
};

const documentationLinks = {
  robotics: 'https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center',
  newNav:
    'https://helpv2.quickbase.com/hc/en-us/articles/30212936236948-Quickbase-September-2024-Release-Notes#h_01J7BD3PQ33X5HVGPX3SEJSCM8',
  newSummaryReport:
    'https://helpv2.quickbase.com/hc/en-us/articles/23804944584468-Quickbase-February-2024-Release-Notes#h_01HPT7ASHWVSMB064ADPVMTR80',
  newFormsExperience:
    'https://helpv2.quickbase.com/hc/en-us/articles/16259648646292-Quickbase-June-2023-release-notes#h_01GAH1YHWP30JQ63J1ZCZ74YCN',
  newDashboardWidget:
    'https://helpv2.quickbase.com/hc/en-us/articles/4418012983828-Quickbase-January-2022-Release-Notes',
};

const hrefs: Hrefs = {
  ...socialLinks,
  ...documentationLinks,
};

export default hrefs;
