# CONFigureWCDMaMEASiMEValuationLISTSEGMentnoSETup

Module: WCDMA Measurements
Source: dd9069720b7b4490.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup
CONFigure:WCDMa:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup 
<SegmentLength>, <Level>, <Frequency>[, <Retrigger>]
Defines the length and analyzer settings of a selected segment. In general, this command must be sent for all segments measured.
Suffix: 
<no>
1..1000
The segment number must not exceed the total number of segments measured (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
).
Parameters:
<SegmentLength>
Number of measured timeslots in the segment.
The sum of the length of all active segments must not exceed 6000. Ignoring this limit results in NCAPs for the remaining slots. The statistical length for result calculation covers at most the first 1000 slots of a segment.
The sum of the length of all segments (active plus inactive) must not exceed 12000. "Inactive" means that no measurement at all is enabled for the segment.
Range: 
1  to  12000
*RST:
1
Default unit: 
slot
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
1.9226E+9 Hz
Default unit: 
Hz
<Retrigger>
OFF |
 
 ON |
 
 IFPower |
 
 IFPSync
Specifies whether a trigger event is required for the segment or not. The setting is ignored for the first segment of a measurement and for trigger mode ONCE (see 
TRIGger:
​
WCDMa:
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
: trigger event required, trigger source configured via 
TRIGger:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
SOURce
IFPower
: trigger event required, "IF Power" trigger
IFPSync
: trigger event required, "IF Power (Sync)" trigger
*RST:
OFF
Example: 
See 
"Using WCDMA List Mode"
Firmware/Software: 
V1.0.5.3
V2.0.11: <Retrigger> added
V2.1.10: <SegmentLength> enhanced for inactive segments
V3.0.30: new <Retrigger> values IFPower and IFPSync
V3.2.10: increased number of segments
V3.7.10: decreased maximal segment length
Options: 
R&S CMW-KM012
Top