# Specifying Measurement-Specific Settings

Module: LTE Measurements
Source: eec20f87cce64a33.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *****************************************************************************
// Define stop condition (stop on limit failure), measurement mode and error
// handling, measured subframe contains only PUCCH (no automatic detection),
// network signaled value NS_10 (without CA) and CA_NS_11 (with CA),
// set no. of resource blocks filter to 10, set a channel type filter.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:SCONdition SLFail
CONFigure:LTE:MEAS:MEValuation:MMODe NORMal
CONFigure:LTE:MEAS:MEValuation:MOEXception ON
CONFigure:LTE:MEAS:MEValuation:TOUT 3600
CONFigure:LTE:MEAS:MEValuation:CTYPe PUCCH
CONFigure:LTE:MEAS:MEValuation:NSValue NS10
CONFigure:LTE:MEAS:MEValuation:NSValue:CAGGregation NS11
CONFigure:LTE:MEAS:MEValuation:NVFilter 10
CONFigure:LTE:MEAS:MEValuation:CTVFilter PUSCh
// *****************************************************************************
// Define the "TPC Mode" list of expected nominal powers.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:TMODe:SCOunt 5,8,4,4,1,1,1,1,1,1,1,1,1,1,1,1
CONFigure:LTE:MEAS:MEValuation:TMODe:ENPower 3,9,12,15,0,0,0,0,0,0,0,0,0,0,0,0
CONFigure:LTE:MEAS:MEValuation:TMODe:RLEVel?
// *****************************************************************************
// Disable automatic detection of RB configuration. Select eMTC narrowband.
// Set number of resource blocks and RB offset manually.
// No multi-cluster allocation.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:RBALlocation:AUTO OFF
CONFigure:LTE:MEAS:EMTC:NBANd 2
CONFigure:LTE:MEAS:MEValuation:RBALlocation:NRB 5
CONFigure:LTE:MEAS:MEValuation:RBALlocation:ORB 2
// *****************************************************************************
// Enable multi-cluster allocation.
// Configure the number of resource blocks and the RB offset for both clusters.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:RBALlocation:MCLuster ON
CONFigure:LTE:MEAS:MEValuation:RBALlocation:MCLuster:NRB1 2
CONFigure:LTE:MEAS:MEValuation:RBALlocation:MCLuster:ORB1 0
CONFigure:LTE:MEAS:MEValuation:RBALlocation:MCLuster:NRB2 3
CONFigure:LTE:MEAS:MEValuation:RBALlocation:MCLuster:ORB2 3
 
// *****************************************************************************
// Define the scope of the measurement: 
// Skip 2 subframes after the trigger event, then capture 20 subframes,
// use subframe number 9 for slot measurements (both slots).
// ***************************************************************************** 
CONFigure:LTE:MEAS:MEValuation:MSUBframes 2, 20, 9
CONFigure:LTE:MEAS:MEValuation:MSLot ALL
// *****************************************************************************
// Specify modulation measurement settings:
// measurement over 20 statistics cycles, modulation scheme QPSK, no SRS,
// EVM window lengths depending on cyclic prefix length and bandwidth.
// Correct EVM window length for 1.4 MHz BW.
// Enable/specify exclusion periods for PUCCH and PUSCH.
// Local oscillator at center of aggregated bandwidth.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:SCOunt:MODulation 20
CONFigure:LTE:MEAS:MEValuation:MODulation:MSCHeme QPSK
CONFigure:LTE:MEAS:MEValuation:SRS:ENABle OFF
CONF:LTE:MEAS:MEV:MODulation:EWLength 5,12,35,66,102,136,28,58,124,250,374,504
CONFigure:LTE:MEAS:MEValuation:MODulation:EWLength:CBANdwidth14 6,13
CONFigure:LTE:MEAS:MEValuation:MODulation:EEPeriods:PUCCh ON
CONFigure:LTE:MEAS:MEValuation:MODulation:EEPeriods:PUSCh:LEADing MS25
CONFigure:LTE:MEAS:MEValuation:MODulation:EEPeriods:PUSCh:LAGGing MS25
CONFigure:LTE:MEAS:MEValuation:MODulation:CAGGregation:LLOCation CACB
// *****************************************************************************
// Specify spectrum measurement settings:
// select a measurement length of 30 slots, use gaussian resolution filter,
// for ACLR measure all adjacent channels.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:SCOunt:SPECtrum:ACLR 30
CONFigure:LTE:MEAS:MEValuation:SCOunt:SPECtrum:SEMask 30
CONFigure:LTE:MEAS:MEValuation:SPECtrum:SEMask:MFILter GAUSs
CONFigure:LTE:MEAS:MEValuation:SPECtrum:ACLR:ENABle ON,ON,ON
// *****************************************************************************
// Specify power measurement settings:
// time mask, OFF power exclusion, high dynamic mode, statistic count
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:PDYNamics:TMASk SBLanking
CONFigure:LTE:MEAS:MEValuation:PDYNamics:AEOPower:LAGGing -5
CONFigure:LTE:MEAS:MEValuation:PDYNamics:AEOPower:LEADing -5
CONFigure:LTE:MEAS:MEValuation:POWer:HDMode ON
CONFigure:LTE:MEAS:MEValuation:SCOunt:POWer 30
// *****************************************************************************
// Specify BLER measurement settings: number of subframes to be measured
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:BLER:SFRames 5000, 10
Top