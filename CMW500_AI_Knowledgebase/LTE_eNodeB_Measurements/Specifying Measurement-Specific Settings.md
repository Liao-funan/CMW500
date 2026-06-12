# Specifying Measurement-Specific Settings

Module: LTE eNodeB Measurements
Source: 3d933ce765f0479d.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *****************************************************************************
// Define stop condition (stop on limit failure) and error handling.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:SCONdition SLFail
CONFigure:LTE:MEAS:ENB:MEValuation:MOEXception ON
CONFigure:LTE:MEAS:ENB:MEValuation:TOUT 3600
// *****************************************************************************
// Use the first RF input as measured input and the second RF input as
// additional input.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:MINPut IN1
// *****************************************************************************
// Specify modulation measurement settings:
// Measurement over 20 subframes and EVM window lengths depending on bandwidth. 
// Correct EVM window length for 1.4 MHz BW.
// Select EVM window position for the I/Q diagram.
// Use PDSCH rhoA of E-UTRA test model.
// Enable measurement of additional RF input and of time alignment.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:SCOunt:MODulation 20
CONFigure:LTE:MEAS:ENB:MEValuation:MODulation:EWLength 5,12,35,66,102,136
CONFigure:LTE:MEAS:ENB:MEValuation:MODulation:EWLength:CBANdwidth14 6
CONFigure:LTE:MEAS:ENB:MEValuation:MODulation:EWPosition HIGH
CONFigure:LTE:MEAS:ENB:MEValuation:MODulation:PDSCh:RHOA OFF
CONFigure:LTE:MEAS:ENB:MEValuation:MODulation:TALignment ON
// *****************************************************************************
// Specify spectrum measurement settings:
// Select a measurement length of 20 subframes. Use gaussian resolution filter.
// For ACLR, measure all types of adjacent channels.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:SCOunt:SPECtrum:ACLR 20
CONFigure:LTE:MEAS:ENB:MEValuation:SCOunt:SPECtrum:SEMask 20
CONFigure:LTE:MEAS:ENB:MEValuation:SPECtrum:SEMask:MFILter GAUSs
CONFigure:LTE:MEAS:ENB:MEValuation:SPECtrum:ACLR:ENABle ON,ON,ON,ON
// *****************************************************************************
// Specify power measurement settings:
// Select a measurement length of 5 frames and enable noise correction. 
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:SCOunt:POWer 5
CONFigure:LTE:MEAS:ENB:MEValuation:POWer:NCORrection ON
Top