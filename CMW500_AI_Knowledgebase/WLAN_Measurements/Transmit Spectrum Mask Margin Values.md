# Transmit Spectrum Mask Margin Values

Module: WLAN Measurements
Source: 5853748b8ac94a3c.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Values
Transmit Spectrum Mask Margin Values
The commands in this section return the limit line margin Y-values of the transmit spectrum mask measurement.
For MIMO, use the commands with 
MIMO<n>
 mnemonic. For bandwidths with two segments, use the commands with 
SEGMents
 mnemonic.
See also 
"Transmit Spectrum Mask DSSS"
 and subsequent sections.
List of Commands
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:MAXimum?
Top