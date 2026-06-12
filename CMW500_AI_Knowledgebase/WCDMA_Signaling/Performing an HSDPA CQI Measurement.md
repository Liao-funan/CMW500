# Performing an HSDPA CQI Measurement

Module: WCDMA Signaling
Source: 68409697dac0453d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA CQI Tests
 > 
Performing an HSDPA CQI Measurement
Performing an HSDPA CQI Measurement
// *****************************************************************************
// Start the measurement and return the overall result and
// the CQI trace results for all carriers. Query the measurement 
// state (should be "RDY").                                                  
// *****************************************************************************
INIT:WCDMA:SIGN:HCQI
FETCh:WCDMa:SIGN:HCQI:RSTate?
FETCh:WCDMa:SIGN:HCQI:TRACe:CARRier1?
FETCh:WCDMa:SIGN:HCQI:TRACe:CARRier2?
FETCh:WCDMa:SIGN:HCQI:STATe?
// *****************************************************************************
// Read the other results obtained in the last measurement
// without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:SIGN:HCQI:CARRier1?
FETCh:WCDMa:SIGN:HCQI:CARRier2?
FETCh:WCDMa:SIGN:HCQI:CARRier1:BLER?
FETCh:WCDMa:SIGN:HCQI:CARRier2:BLER?
FETCh:WCDMa:SIGN:HCQI:CARRier1:DTX?
FETCh:WCDMa:SIGN:HCQI:CARRier2:DTX?
FETCh:WCDMa:SIGN:HCQI:CARRier1:MSFRames?
FETCh:WCDMa:SIGN:HCQI:CARRier2:MSFRames?
Top