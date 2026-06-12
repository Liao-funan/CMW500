# CONFigureWLANMEASiMEValuationLISTSEGMentSegSETup

Module: WLAN Measurements
Source: 4f1733a85c0841ad.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:SETup
CONFigure:WLAN:MEAS<i>:MEValuation:LIST:SEGMent<Seg>:SETup 
<BurstNumInSeg>, <Standard>, <ModulationType>, <BurstType>
Defines burst parameter settings for segment <Seg>. This command must be sent for all segments to be measured.
Suffix: 
<Seg>
1..100
The segment number must not exceed the total number of segments measured (see 
CONFigure:
​
WLAN:
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
<BurstNumInSeg>
Number of bursts in the segment
Range: 
1  to  1000
*RST:
1
<Standard>
DSSS |
 
 LOFDm |
 
 HTOFdm
DSSS
: 802.11b/g (DSSS)
LOFDm
: 802.11a/g (OFDM)
HTOFdm
: 802.11n (requires R&S CMW-KM651)
*RST:
LOFD
<ModulationType>
BPM6 |
 
 BPM9 |
 
 QM12 |
 
 QM18 |
 
 Q1M24 |
 
 Q1M36 |
 
 Q6M48 |
 
 Q6M54 |
 
 BR12 |
 
 QR12 |
 
 QR34 |
 
 Q1R12 |
 
 Q1R34 |
 
 Q6R23 |
 
 Q6R34 |
 
 Q6R56 |
 
 DBPSk1 |
 
 DQPSk2 |
 
 CCK5 |
 
 CCK11
The modulation type must be compatible with the selected standard (see 
Table "Modulation types for list mode"
). If an incompatible modulation type is selected, a compatible value is set instead (DBPSk1, BPM6 or BR12).
*RST:
Q6M54
<BurstType>
SHORtplcp |
 
 LONGplcp |
 
 MIXMode |
 
 GF20
The burst type must be compatible with the standard for DSSS and 802.11n signals. The value is ignored for other OFDM signals.
SHORtplcp
: Short PLCP (DSSS)
LONGplcp
: Long PLCP (DSSS)
MIXMode
: 802.11n compatibility mode
GF20
: 802.11n greenfield mode, 20 MHz bandwidth
*RST:
MIXM
Example: 
See 
"Using WLAN List Mode"
Firmware/Software: 
V1.0.10.50
V3.5.30: New simplified set of <Standard> values
Options: 
R&S CMW-KM012
Top