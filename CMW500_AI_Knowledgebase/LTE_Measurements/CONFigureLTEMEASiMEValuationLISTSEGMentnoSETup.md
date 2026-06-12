# CONFigureLTEMEASiMEValuationLISTSEGMentnoSETup

Module: LTE Measurements
Source: 76b894376ede4f0a.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup 
<SegmentLength>, <Level>, <DuplexMode>, <Band>, <Frequency>, <ChBandwidth>, <CyclicPrefix>, <ChannelType>, <RetriggerFlag>, <EvaluatOffset>[, <NetworkSigValue>]
Defines the length and analyzer settings of segment <no>. This command must be sent for all segments to be measured (
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
).
For the TDD mode, see also 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
TDD
.
For SCC-specific settings, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SCC<c>
.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<SegmentLength>
Number of subframes in the segment
Range: 
1  to  2000
*RST:
1
<Level>
Expected nominal power in the segment. The range can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Default unit: 
dBm
<DuplexMode>
FDD |
 
 TDD
Duplex mode used in the segment
<Band>
FDD: OB1 |
 
 ... |
 
 OB28 |
 
 OB30 |
 
 OB31 |
 
 OB65 |
 
 OB66 |
 
 OB68 |
 
 OB70 |
 
 OB71
TDD: OB33 | ... | OB45 | OB48 | OB250
Operating band used in the segment
*RST:
OB1 (OB33 for TDD)
<Frequency>
PCC center frequency used in the segment
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.95E+9 Hz
Default unit: 
Hz
<ChBandwidth>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
PCC channel bandwidth used in the segment
B014
: 1.4 MHz
B030
: 3 MHz
B050
: 5 MHz
B100
: 10 MHz
B150
: 15 MHz
B200
: 20 MHz
*RST:
B200
<CyclicPrefix>
NORMal |
 
 EXTended
Type of cyclic prefix used in the segment
*RST:
NORM
<ChannelType>
AUTO |
 
 PUSCh |
 
 PUCCh
AUTO
: automatic detection of channel type
PUSCh
: only PUSCH in measured subframe
PUCCh
: only PUCCH in measured subframe
*RST:
PUSC
<RetriggerFlag>
OFF |
 
 ON |
 
 IFPower
Specifies whether the measurement waits for a trigger event before measuring the segment, or not.
For the first segment, the value OFF is always interpreted as ON.
For subsequent segments, the retrigger flag is ignored for trigger mode ONCE and evaluated for trigger mode SEGMent, see 
TRIGger:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
MODE
.
OFF
: measure the segment without retrigger
ON
: wait for a trigger event from the trigger source configured via 
TRIGger:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
SOURce
IFPower
: wait for a trigger event from the trigger source "IF Power"
*RST:
ON
<EvaluatOffset>
Number of subframes at the beginning of the segment that are not evaluated
Range: 
0  to  1000
*RST:
0
<NetworkSigValue>
NS01 |
 
 NS02 |
 
 NS03 |
 
 NS04 |
 
 NS05 |
 
 NS06 |
 
 NS07 |
 
 NS08 |
 
 NS09 |
 
 NS10 |
 
 NS11 |
 
 NS12 |
 
 NS13 |
 
 NS14 |
 
 NS15 |
 
 NS16 |
 
 NS17 |
 
 NS18 |
 
 NS19 |
 
 NS20 |
 
 NS21 |
 
 NS22 |
 
 NS23 |
 
 NS24 |
 
 NS25 |
 
 NS26 |
 
 NS27 |
 
 NS28 |
 
 NS29 |
 
 NS30 |
 
 NS31 |
 
 NS32 |
 
 NS35
Network signaled value to be used for the segment
*RST:
NS01
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.0.10, some bands added in later versions
V3.2.70: added <RetriggerFlag> value IFPower; NS11 to NS18, NS20
V3.2.82: added NS19, NS21 to NS24
V3.5.30: added NS25 to NS32
V3.7.20: added NS35
Options: 
R&S CMW-KM012
R&S CMW-KM500 for FDD, R&S CMW-KM550 for TDD
Top