# FETChLTEMEASiENBMEValuationTRACeSEMaskRBWkHzCURRent

Module: LTE eNodeB Measurements
Source: f64e94b4d64f4893.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:TRACe:SEMask:RBW<kHz>:MAXimum? 
Returns the values of the spectrum emission traces. Separate traces are available for the individual resolution bandwidths (<kHz>). The results of the current, average and maximum traces can be retrieved.
See also 
"View Spectrum Emission Mask"
.
Suffix: 
<kHz>
30, 100, 1000
Resolution bandwidth in kHz
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
The test point separation and the number of results n depend on the resolution bandwidth, see table below. The value in the middle of each result array corresponds to the carrier frequency.
For 
RBW100
 and 
RBW1000
, results are only available for frequencies, for which limits using these RBW values have been defined. For other frequencies INV is returned.
Range: 
-120 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
The following table lists the number of results n, the test point separation and the frequency ranges depending on the resolution bandwidth.
<Power> results depending on RBW
RBW
Results n
Separation
Frequency range
RBW30
4799
15 kHz
-35.985 MHz to +35.985 MHz
RBW100
1599
45 kHz
-35.955 MHz to +35.955 MHz
RBW1000
799
90 kHz
-35.910 MHz to +35.910 MHz
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top