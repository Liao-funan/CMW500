# CONFigureBLUetoothMEASiMEValuationLISTSEGMentno[SETup]EXTended

Module: Bluetooth Measurements
Source: d086090a675a491c.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:EXTended
CONFigure:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>[:SETup]:EXTended 
<BurstType>, <Phy>, <Coding>, <PacketType>, <PatternType>, <PayloadLength>, <NoOfOffSlots>, <SegmentLength>, <MeasOnException>, <Level>, <Frequency>, <MeasFilter>, <ReTrigger>
Defines the segment length, the signal properties including Bluetooth version 5 and the analyzer settings for a selected segment. In general, this command must be sent for all segments to be measured.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..48
Segment number
Parameters:
<1_BurstType>
BR |
 
 EDR |
 
 LE
Burst type expected in the segment
*RST:
Basic Rate
<2_PHY>
LE1M |
 
 LE2M |
 
 LELR
Relevant only for LE. Set dummy value for other burst types.
LE1M
: LE 1 Msymbol/s uncoded PHY
LE2M
: LE 2 Msymbol/s uncoded PHY
LELR
: LE 1
 
Msymbol/s long range (LE coded PHY)
*RST:
LE1M
<3_Coding>
S8 |
 
 S2
Coding S = 8 or S = 2 relevant only for LELR PHY
Set dummy value for other physical layers.
<4_PacketType>
DH1 |
 
 DH3 |
 
 DH5 |
 
 E21P |
 
 E23P |
 
 E25P |
 
 E31P |
 
 E33P |
 
 E35P |
 
 RFPHytest |
 
 ADVertiser
Packet type expected in the segment
DH1, DH3, DH5
: BR packet
E21P, E23P, E25P, E31P, E33P, E35P
: 2-DH1, 2-DH3, 2-DH5, 3-DH1, 3-DH3, 3-DH5 EDR packet
RFPHytest
: LE test packet
ADVertiser
: LE advertiser
*RST:
DH1
<5_PatternType>
ALL1 |
 
 P11 |
 
 OTHer |
 
 ALTernating |
 
 P44
Payload pattern type expected in the segment
ALL1
: 11111111
P11
: 10101010
OTHer
: any pattern except P11, P44 and ALL1
ALTernating
: the periodical change of the pattern P11, P44
P44
: 11110000
*RST:
OTH
<6_PayloadLength>
Payload length expected in the segment
Range: 
0 Byte(s)  to  1021 Byte(s)
*RST:
27 Byte(s)
<7_NoOfOffSlots>
Number of unused slots between any two occupied slots or slot sequences expected in the segment
Range: 
1  to  9
*RST:
1
<8_SegmentLength>
Number of measured bursts in the segment. The sum of the length of all active segments must not exceed 6700 timeslots (1 timeslot = 625 μs duration).
Range: 
1  to  1000
*RST:
10
<10_MeasOnExcept>
OFF |
 
 ON
Specifies whether the segment results that the R&S
 
CMW identifies as faulty or inaccurate are rejected.
ON
: include the erroneous bursts
OFF
: exclude the erroneous bursts
*RST:
OFF
<11_Level>
Expected nominal power in the segment. The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
<12_Frequency>
Center frequency for the segment
Range: 
100E+6 Hz  to  6E+9 Hz
*RST:
2.402E+9 Hz
<13_MeasFilter>
NARRow |
 
 WIDE
Filter bandwidth for the segment
NARRow
: narrow-band filter
WIDE
: wide-band filter
*RST:
NARR
<14_ReTrigger>
OFF |
 
 ON
Specifies whether a trigger event is required for the segment or not. The setting is ignored for the first segment of a measurement.
OFF
: measure the segment without retrigger
ON
: trigger event required
*RST:
OFF
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S
 
CMW100/CMW with MUA
R&S CMW-KM012
R&S CMW-KM610 for <BurstType> BR and EDR
R&S CMW-KM611 for <BurstType> LE
R&S CMW-KM721 for <Phy> LE2M and LELR
Top