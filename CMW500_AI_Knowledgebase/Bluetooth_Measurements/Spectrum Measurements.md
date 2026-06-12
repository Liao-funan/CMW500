# Spectrum Measurements

Module: Bluetooth Measurements
Source: 7af626d68bff4927.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Spectrum Measurements
Spectrum Measurements
// *************************************************************************
// Specify the filter bandwidth for BR, EDR, and LE measurements.
// LE measurements are provided for LE 1M, LE 2M and LE coded PHY. 
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:BRATe:FILTer:BWIDth WIDE
CONFigure:BLUetooth:MEAS:MEValuation:EDRate:FILTer:BWIDth WIDE
CONFigure:BLUetooth:MEAS:MEValuation:LENergy:LRANge:FILTer:BWIDth WIDE
CONFigure:BLUetooth:MEAS:MEValuation:LENergy:LE1M:FILTer:BWIDth WIDE 
CONFigure:BLUetooth:MEAS:MEValuation:LENergy:LE2M:FILTer:BWIDth WIDE
CONFigure:BLUetooth:MEAS:MEValuation:LENergy:LRANge:FILTer:BWIDth WIDE
// *************************************************************************
// Perform single shot measurement
// *************************************************************************
INITiate:BLUetooth:MEAS:MEValuation
// *******************************************************************************
// BR: Monitor the spectrum ACP view.
// Measure the ACP in all 79 Bluetooth channels 
//
// Set the frequency range channels and threshold. Perform single shot 
// measurement; return frequency range and "Spectrum 20 dB Bandwidth" results. 
// *******************************************************************************
CONFigure:BLUetooth:MEAS:DISPlay SACP
CONFigure:BLUetooth:MEAS:MEValuation:SACP:BRATe:MEASurement:MODE CH79
CONFigure:BLUetooth:MEAS:ISIGnal:OSLots:BRATe 3,4,5
READ:BLUetooth:MEAS:MEValuation:TRACe:SACP:PTX?
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SACP:CURRent?
CONFigure:BLUetooth:MEAS:MEValuation:FRANge:BRATe:MEASurement 5,5,-30
FETCh:BLUetooth:MEAS:MEValuation:FRANge:BRATe:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:TRACe:FRANge:AVERage?
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SOBW:MAXimum?
FETCh:BLUetooth:MEAS:MEValuation:SOBW:BRATe:MAXimum?
// *******************************************************************************
// EDR: Measure the gated ACP in all 79 Bluetooth channels with 3 off slots 
// (the other BR input signal settings defined above are still valid).
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe EDR
CONFigure:BLUetooth:MEAS:MEValuation:SGACp:EDRate:MEASurement:MODE CH79
CONFigure:BLUetooth:MEAS:ISIGnal:OSLots:EDRate 3, 3, 3, 3, 3, 3
INITiate:BLUetooth:MEAS:MEValuation
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SGAcp:PTX? 
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SGAcp:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:SGAcp:PTX? 
// *******************************************************************************
// LE: Measure the ACP in all 81 Bluetooth halfchannels for a signal with 2 off slots.
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:MEValuation:SACP:LENergy:LE1M:MEASurement:MODE CH40
CONFigure:BLUetooth:MEAS:ISIGnal:OSLots:LENergy:LE1M 2
INITiate:BLUetooth:MEAS:MEValuation
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SACP:PTX?
FETCh:BLUetooth:MEAS:MEValuation:TRACe:SACP:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:SACP:LENergy?
Top