# CONFigureBLUetoothMEASiMEValuationLIMitEDRatePVTime

Module: Bluetooth Measurements
Source: adb3d586ad52498b.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Limit Settings
 > 
Limits (Power vs. Time)
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:PVTime
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIMit:EDRate:PVTime 
<DPSKmGFSKLow>, <DPSKmGFSKUpp>, <GuardPeriodLow>, <GuardPeriodUpp>, <DPSKmGFSKEnab>(4), <GuardPeriodEnab>(4)
Defines the power limits for EDR: lower and upper limits for DPSK minus GFSK power and for guard period, limit check enabling.
Parameters:
<DPSKmGFSKLow>
Range: 
-99.99 dB  to  99.99 dB
*RST:
-4 dB
<DPSKmGFSKUpp>
Range: 
-99.99 dB  to  99.99 dB
*RST:
1 dB
<GuardPeriodLow>
Range: 
-9.99 µs  to  9.99 µs
*RST:
4.75 µs
<GuardPeriodUpp>
Range: 
-9.99 µs  to  9.99 µs
*RST:
5.25 µs
<DPSKmGFSKEnab>
OFF |
 
 ON
Disables or enables the limit check for the DPSK minus GFSK power, 4 values, corresponding to the current, average, maximum and minimum results.
*RST:
ON
<GuardPeriodEnab>
OFF |
 
 ON
Disables or enables the limit check for the guard period, 4 values, corresponding to the current, average, maximum and minimum results.
*RST:
ON
Example: 
See 
"Limit Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Power Limits"
Top