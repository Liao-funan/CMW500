# CONFigureGSMMEASiMEValuationLISTSEGMentnoSETup

Module: GSM Measurements
Source: c7ec1f47f4ab48a6.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup 
<SegmentLength>, <Level>, <Frequency>[, <PCL>, <RetriggerFlag>, <EvaluatOffset>]
Defines the length, the analyzer settings, the expected PCL, retrigger setting and evaluation offset of a selected segment. In general, this command must be sent for all measured segments (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
).
The PCL values are used if the global "PCL Mode: PCL" is set (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
PCLMode
PCL
). They can affect the limit check results; see 
"PCL Mode"
.
The current GSM band setting (
CONFigure:
​
GSM:
​
MEAS<i>:
​
BAND
) specifies the exact meaning of the PCL; see 
Table "GSM power control levels"
.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<SegmentLength>
Number of steps or frames in the segment, depending on the configured step length (
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SLENgth
).
If the step length is set to OFF, the segment length is defined in frames. So the number of slots in the segment equals 8 * <SegmentLength>.
If a step length is defined (1 to 8), the segment length is defined in steps. So the number of slots in the segment equals <StepLength> * <SegmentLength>.
Range: 
1  to  3000
*RST:
1
<Level>
Expected nominal power in the segment. The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Default unit: 
dBm
<Frequency>
Range: 
100E+6 Hz  to  6E+9 Hz
*RST:
903E+6 Hz
Default unit: 
Hz
<PCL>
Expected power control level for the segment
Range: 
0  to  31
*RST:
0
<RetriggerFlag>
OFF |
 
 ON
Specifies whether a trigger event is required for the segment or not. The setting is ignored for the first segment of a measurement and for trigger mode ONCE (see 
TRIGger:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
MODE
).
OFF
: measure the segment without retrigger
ON
: wait for trigger event before measuring the segment
*RST:
ON
<EvaluatOffset>
Number of steps at the beginning of the segment which are not measured
Range: 
0  to  1000
*RST:
0
Example: 
See 
"GSM List Mode"
Firmware/Software: 
V1.0.4.11 (parameters <PCL>, <Retrigger Flag>, <EvaluatOffset> added in V2.0.10)
Options: 
R&S CMW-KM012
Top