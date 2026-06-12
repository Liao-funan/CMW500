# SENSeWCDMaSIGNiUECapabilityMEASurement

Module: WCDMA Signaling
Source: 05e76e30c1ce4ae5.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:MEASurement?
SENSe:WCDMa:SIGN<i>:UECapability:MEASurement? 
Queries the UE capabilities related to inter-frequency measurements.
Return values: 
<InterFreqDetect>
NO |
 
 YES
Indicates whether the UE is able to measure inter-frequency detected set.
<EnhInterFreq>
NO |
 
 YES
Indicates whether the UE requires compressed mode for measurements on two additional frequencies.
<FreqSpecificCM>
NO |
 
 YES
Indicates whether the UE can apply compressed mode outside of the used frequency bands only to the configured frequencies. This information is relevant only for the dual band operation.
<IntrFrqCCwoCM>
NO |
 
 YES
Indicates whether the UE requires compressed mode to measure on the frequencies which are configured for HS-DSCH operation and associated with the secondary serving HS-DSCH cells
<CEDSMeas>
NO |
 
 YES
Indicates whether the UE supports exclusion of cells from intra-frequency detected set measurements
<WRSRQFDDMeas>
NO |
 
 YES
Indicates whether the UE is able to perform wideband RSRQ FDD measurements
<Ev2gRepSecDLFrq>
NO |
 
 YES
Indicates whether the UE supports event 2G reporting on a secondary DL frequency
<ExtRSRQLwrRng>
NO |
 
 YES
Indicates whether the UE supports extended RSRQ lower value range
<RSRQOnAllSym>
NO |
 
 YES
Indicates whether the UE supports RSRQ on all symbols
<IncUECrMnUTRA>
NO |
 
 YES
Indicates whether the UE supports increased number of UTRA carrier monitoring in connected and idle mode
<IncUECrMnEUTRA>
NO |
 
 YES
Indicates whether the UE supports increased number of E-UTRA carrier monitoring in connected and idle mode
<EnhUPHReporting>
NO |
 
 YES
Indicates whether the UE supports enhanced UPH reporting
<ESCCE1COp>
NO |
 
 YES
Indicates whether the UE supports enhanced serving cell change for event 1c operation
<CRIReporting>
NO |
 
 YES
Indicates whether the UE supports cell resellection indication reporting
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70, V3.7.10: added <IntrFrqCCwoCM>,<CEDSMeas>, <WRSRQFDDMeas>
V3.7.20: added <Ev2gRepSecDLFrq>, <ExtRSRQLwrRng>, <RSRQOnAllSym>, <IncUECrMonUTRA>, <IncUECrMnEUTRA>, <EnhUPHReporting>, <ESCCE1COp>, <CRIReporting>,
Manual operation: 
See 
"Additional Measurement Parameters"
Top