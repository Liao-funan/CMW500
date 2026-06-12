# Transmit Spectrum Mask Margin Positions

Module: WLAN Measurements
Source: b34edc2cfbf1461b.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Margin Positions
Transmit Spectrum Mask Margin Positions
The commands in this section return the limit line margin positions (X-values) of the transmit spectrum mask measurement.
For MIMO, use the commands with 
MIMO<n>
 mnemonic. For bandwidths with two segments, use the commands with 
SEGMents
 mnemonic.
See also 
"Transmit Spectrum Mask DSSS"
 and subsequent sections.
List of Commands
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:FREQuency:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:FREQuency:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:SEGMents:FREQuency:MAXimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:AVERage?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MINimum?
CALCulate:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MAXimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:AVERage?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MINimum?
FETCh:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MAXimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:CURRent?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:AVERage?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MINimum?
READ:WLAN:MEAS<i>:MEValuation:TSMask:MIMO<n>:SEGMents:FREQuency:MAXimum?
Top