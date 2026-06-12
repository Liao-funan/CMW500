# Specifying Required Settings

Module: WCDMA Measurements
Source: 1dcff6fb4b784f29.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Specifying Required Settings
Specifying Required Settings
// *****************************************************************************
// Specify required UE signal settings: presence of a DPDCH, slot format 1,
// scrambling code 5, channel configuration with HSUPA channels
// *****************************************************************************
CONFigure:WCDMa:MEAS:UESignal:DPDCh ON
CONFigure:WCDMa:MEAS:UESignal:SFORmat 1
CONFigure:WCDMa:MEAS:UESignal:CARRier1:SCODe 5
CONFigure:WCDMa:MEAS:UESignal:ULConfig HSUPa
Top