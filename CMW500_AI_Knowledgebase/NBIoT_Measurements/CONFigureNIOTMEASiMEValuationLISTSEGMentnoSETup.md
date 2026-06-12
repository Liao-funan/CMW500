# CONFigureNIOTMEASiMEValuationLISTSEGMentnoSETup

Module: NBIoT Measurements
Source: b7cc1fbd00a642b4.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup
CONFigure:NIOT:MEAS<i>:MEValuation:LIST:SEGMent<no>:SETup 
<SegmentLength>, <Level>, <Band>, <Frequency>, <NPUSChFormat>, <NofSubcarrier>, <StartSC>, <NofRUs>, <NofRepetitions>, <RetriggerFlag>, <EvaluatOffset>
Defines the length and analyzer settings of segment <no>. This command must be sent for all segments to be measured (
CONFigure:
​
NIOT:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
LRANge
).
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<SegmentLength>
Number of slots in the segment
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
<Band>
OB1 |
 
 OB2 |
 
 OB3 |
 
 OB5 |
 
 OB8 |
 
 OB11 |
 
 OB12 |
 
 OB13 |
 
 OB17 |
 
 OB18 |
 
 OB19 |
 
 OB20 |
 
 OB25 |
 
 OB26 |
 
 OB28 |
 
 OB31 |
 
 OB66
*RST:
OB1
<Frequency>
Carrier center frequency used in the segment
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.95E+9 Hz
Default unit: 
Hz
<NPUSChFormat>
F1 |
 
 F2
Format of the NPUSCH.
*RST:
F1
<NofSubcarrier>
1 |
 
 3 |
 
 6 |
 
 12
Number of subcarriers per resource unit
The allowed values have dependencies, see 
"Resource Unit Allocation"
.
*RST:
1
<StartSC>
Offset of the first allocated subcarrier from the edge of the transmission bandwidth
For a subcarrier spacing of 3.75 kHz / 15 kHz, n equals 48 / 12.
Range: 
0  to  n - <NofSubCarrier>
*RST:
0
<NofRUs>
NRU01 |
 
 NRU02 |
 
 NRU03 |
 
 NRU04 |
 
 NRU05 |
 
 NRU06 |
 
 NRU08 |
 
 NRU10
Number of resource units allocated for the NPUSCH
*RST:
NRU01
<NofRepetitions>
NR1 |
 
 NR2 |
 
 NR4 |
 
 NR8 |
 
 NR16 |
 
 NR32 |
 
 NR64 |
 
 NR128 |
 
 NR256 |
 
 NR512 |
 
 NR1K |
 
 NR2K
Number of NPUSCH repetitions: 1, 2, 4, ..., 512, 1024, 2048
*RST:
NR1
<RetriggerFlag>
OFF |
 
 ON |
 
 IFPower
Specifies whether the measurement waits for a trigger event before measuring the segment, or not.
For the first segment, the value OFF is always interpreted as ON.
For subsequent segments, the retrigger flag is ignored for trigger mode ONCE and evaluated for trigger mode SEGMent, see 
TRIGger:
​
NIOT:
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
Measure the segment without retrigger.
ON
Wait for a trigger event from the trigger source configured via 
TRIGger:
​
NIOT:
​
MEAS<i>:
​
MEValuation:
​
SOURce
.
IFPower
Wait for a trigger event from the trigger source "IF Power".
*RST:
ON
<EvaluatOffset>
Number of slots at the beginning of the segment that are not evaluated
Range: 
0  to  1000
*RST:
0
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM012
Top