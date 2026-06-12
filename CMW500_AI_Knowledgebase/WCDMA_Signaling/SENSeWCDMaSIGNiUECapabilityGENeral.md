# SENSeWCDMaSIGNiUECapabilityGENeral

Module: WCDMA Signaling
Source: 26a26cf562a44142.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:GENeral?
SENSe:WCDMa:SIGN<i>:UECapability:GENeral? 
Returns general UE capability information.
Return values: 
<Release>
Access stratum release indicator, e.g. Rel. 99, Rel. 5
Range: 
5  to  99
<BattConsumOpt>
NO |
 
 YES
Indicates whether the UE benefits from NW-based battery consumption optimization
<MIMOnlySStream>
NO |
 
 YES
Indicates whether the UE supports MIMO only single stream
<EMeasReport>
NO |
 
 YES
Indicates whether the UE supports E-UTRAN measurement reporting
<AdjFrqMeaNoCM>
NO |
 
 YES
Indicates whether the UE supports adjacent frequency measurements without compressed mode
<InBFrqMeasNoCM>
NO |
 
 YES
Indicates whether the UE supports inter-band frequency measurements without compressed mode
<SIB11bis>
NO |
 
 YES
Indicates whether the UE supports system information block 11bis
<CSG>
NO |
 
 YES
Indicates whether the UE supports closed subscriber group (CSG)
<CSGProximity>
NO |
 
 YES
Indicates whether the UE supports CSG proximity indication
<CellTxDivDC>
NO |
 
 YES
Indicates whether the UE supports cell-specific TX diversity in dual cell operation
<NCellSIAcq>
NO |
 
 YES
Indicates whether the UE supports a neighbor cell system information acquisition
<CSVoHSPA>
NO |
 
 YES
Indicates whether the UE supports CS voice over HSPA
<DCMimoDiffBands>
NO |
 
 YES
Indicates whether the UE supports dual cell with MIMO operation in different bands
<UtranAnr>
NO |
 
 YES
Indicates whether the UE supports ANR
<UmRlcReEstReCnf>
NO |
 
 YES
Indicates whether the UE supports UM RLC reestablishment via reconfiguration
<RfMFBI>
NO |
 
 YES
Indicates whether the UE supports multiple frequency band indicators
<Reserved>
NO |
 
 YES
Reserved for future
<ExtMeas>
NO |
 
 YES
Indicates whether the UE supports extended measurements
<FR99PRACH>
NO |
 
 YES
Indicates whether the UE supports fallback to R99 PRACH in CELL_FACH state and IDLE mode
<ConcDeployment>
NO |
 
 YES
Indicates whether the UE supports concurrent deployment of 2 ms and 10 ms TTI in a cell in CELL_FACH state and IDLE mode
<TTIAlignHARQ>
NO |
 
 YES
Indicates whether the UE supports TTI alignment and per HARQ process activation and deactivation in CELL_FACH state and IDLE mode
<MIMODSR4x4>
NO |
 
 YES
Indicates whether the UE supports MIMO mode with four transmit antennas only with restriction to dual stream operation
<NCMCMIMO>
NO |
 
 YES
Indicates whether the UE supports non-contiguous multi-cell operation on two, three or four cells with single gap in one band with MIMO
<DsacPpacCellDCH>
NO |
 
 YES
Indicates whether the UE supports DSAC and PPAC update in CELL_DCH
<AccGrpsAccCtrl>
NO |
 
 YES
Indicates whether the UE supports access groups -based access control
<EnTTISwitching>
NO |
 
 YES
Indicates whether the UE supports enhanced TTI switching
<ImplGrant>
NO |
 
 YES
Indicates whether the UE supports implicit grant handling
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <MIMOnlySStream>, <EMeasReport>, <AdjFrqMeaNoCM>, <InBFrqMeasNoCM>, <SIB11bis>, <CSG>, <CSGProximity>, <CellTxDivDC>, <NCellSIAcq>, <CSVoHSPA>
V3.2.70: added <DCMimoDiffBands>, <UtranAnr>, <UmRlcReEstReCnf>, <RfMFBI>, <ULOLTD>, <ExtMeas>
V3.2.80: removed <ULOLTD>
V3.7.10: added <FR99PRACH>, <ConcDeployment>, <TTIAlignHARQ>, <MIMODSR4x4>, <NCMCMIMO>
V3.7.20: added <DsacPpacCellDCH>, <AccGrpsAccCtrl>, <EnTTISwitching>, <ImplGrant>
Manual operation: 
See 
"General"
Top