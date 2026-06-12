# CONFigureGSMSIGNiCONNectionPSWitchedSCONfigCOMBinedCARRierc

Module: GSM Signaling
Source: 2b7f406409f74662.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Slot Configuration and Resulting Throughput
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:COMBined:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:COMBined:CARRier<c> 
<EnableDL>(8), <LevelDL>(8), <CodingSchemeDL>(8), <EnableUL>(8), <GammaUL>(8), <CodingSchemeUL>, <Channel>
Specifies most slot configuration parameters and some other important packet switched connection parameters.
This command is especially useful for consistent and efficient reconfiguration in state "TBF Established". It combines several alternative commands into a single command.
Suffix: 
<c>
1..2
Selects the carrier in dual carrier mode. For disabled dual carrier mode, the suffix must be omitted or set to 1.
Parameters:
<EnableDL>
OFF |
 
 ON
List of 8 values for downlink slot 0 to 7, specifying for each slot whether the MS has to listen to a signal in the slot.
Timeslot 0 cannot be enabled (always OFF).
*RST:
OFF,OFF,OFF,ON,OFF,OFF,OFF,OFF
<LevelDL>
ON |
 
 OFF
List of 8 signal levels for downlink slot 0 to 7, defining the downlink signal level relative to the reference level
Option R&S CMW-KS210 is required to modify this setting. Without the option, only KEEP is allowed.
Range: 
-40 dB  to  0 dB
*RST:
OFF, OFF, OFF, 0 dB, OFF, OFF, OFF, OFF
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables DL signal transmission using the previous/default power values)
<CodingSchemeDL>
C1 |
 
 C2 |
 
 C3 |
 
 C4 |
 
 MC1 |
 
 MC2 |
 
 MC3 |
 
 MC4 |
 
 MC5 |
 
 MC6 |
 
 MC7 |
 
 MC8 |
 
 MC9 |
 
 DA5 |
 
 DA6 |
 
 DA7 |
 
 DA8 |
 
 DA9 |
 
 DA10 |
 
 DA11 |
 
 DA12
List of 8 coding schemes for downlink slot 0 to 7. All 8 values must be identical. In the current software version, the same value applies to all downlink slots and to both carriers.
The value must be compatible to the configured TBF level, see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
PSWitched:
​
TLEVel
.
C1 to C4
: CS-1 to CS-4
MC1 to MC9
: MCS-1 to MCS-9
DA5 to DA12
: DAS-5 to DAS-12
*RST:
MC1
<EnableUL>
OFF |
 
 ON
List of 8 values enabling/disabling uplink slot 0 to 7
Timeslot 0 cannot be enabled (always OFF).
*RST:
OFF,OFF,OFF,ON,OFF,OFF,OFF,OFF
<GammaUL>
List of 8 gamma values for uplink slot 0 to 7, specifying the power control parameter 
Γ
CH
Range: 
0  to  31
*RST:
13
<CodingSchemeUL>
C1 |
 
 C2 |
 
 C3 |
 
 C4 |
 
 MC1 |
 
 MC2 |
 
 MC3 |
 
 MC4 |
 
 MC5 |
 
 MC6 |
 
 MC7 |
 
 MC8 |
 
 MC9 |
 
 UA7 |
 
 UA8 |
 
 UA9 |
 
 UA10 |
 
 UA11
Coding scheme for uplink packet data channels. The value must be compatible to the configured TBF level, see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
PSWitched:
​
TLEVel
.
C1 to C4
: CS-1 to CS-4
MC1 to MC9
: MCS-1 to MCS-9
UA7 to UA11
: UAS-7 to UAS-11
*RST:
MC1
<Channel>
GSM channel number for TCH and PDCH. The range of values depends on the selected band; for an overview see 
"GSM Bands and Channels"
. The values below are for GSM 900.
Range: 
1 to 124, 940 to 1023
*RST:
62 for carrier 1, 72 for carrier 2
Example: 
The following example assumes that R&S CMW-KS210 is not available. In that case KEEP must be sent for the downlink levels.
CONF:GSM:SIGN:CONN:PSW:SCON:COMB:CARR OFF,OFF,OFF,ON,OFF,OFF,OFF,OFF,KEEP,KEEP,KEEP,KEEP,KEEP,KEEP,KEEP,KEEP,MC1,MC1,MC1,MC1,MC1,MC1,MC1,MC1,OFF,OFF,OFF,ON,OFF,OFF,OFF,OFF,13,13,13,13,13,13,13,13,MC1,62
Firmware/Software: 
V2.1.60
Options: 
R&S CMW-KS201 for carrier 2 and for coding schemes DAS-i and UAS-i
R&S CMW-KS210 for modification of <LevelDL>
Manual operation: 
See 
"UL Coding Scheme"
Top