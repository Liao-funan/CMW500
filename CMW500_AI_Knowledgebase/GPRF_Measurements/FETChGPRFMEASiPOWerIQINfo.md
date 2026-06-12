# FETChGPRFMEASiPOWerIQINfo

Module: GPRF Measurements
Source: 434f24f367fa447b.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for List Mode
 > 
FETCh:GPRF:MEAS<i>:POWer:IQINfo?
FETCh:GPRF:MEAS<i>:POWer:IQINfo? 
<ListIndex>[, <ResultIndex>]
Returns the number of samples and the sampling rate of the I/Q data measurement in a particular frequency/level step <index>.
With the optional <ResultIndex> parameter, it is also possible to get results for a particular list index repetition.
Query parameters: 
<ListIndex>
Range: 
0 to 3999
<ResultIndex>
Range: 
0 to #repetitions of <ListIndex>
Return values: 
<Reliability>
See 
"Reliability Indicator"
<NumberOfSamples>
Range: 
0 to 4E+6
<SampleRate>
Range: 
250 Hz to 50 MHz
Default unit: 
dB
Example: 
See 
"Performing an I/Q Data Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top