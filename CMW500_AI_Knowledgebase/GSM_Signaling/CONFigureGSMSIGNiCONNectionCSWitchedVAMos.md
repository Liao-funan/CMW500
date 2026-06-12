# CONFigureGSMSIGNiCONNectionCSWitchedVAMos

Module: GSM Signaling
Source: 5ed32e957d544e34.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
VAMOS Configuration
 > 
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:VAMos
CONFigure:GSM:SIGN<i>:CONNection:CSWitched:VAMos 
<Subchannel>, <TSCactiveSubch>, <TSCsetActSubch>, <TSCotherSubch>, <TSCsetOthSubch>, <SubchPowImbRat>, <Profile>
Configures VAMOS. For background information, see 
"VAMOS"
.
Parameters:
<Subchannel>
VAMOS subchannel to be used for the DUT (active subchannel)
Range: 
0  to  1
*RST:
0
<TSCactiveSubch>
TSC to be used for the DUT (active subchannel)
Range: 
0  to  7
*RST:
0
<TSCsetActSubch>
TSC set to be used for the DUT (active subchannel)
Range: 
1  to  2
*RST:
1
<TSCotherSubch>
TSC to be used for the virtual second VAMOS user (other subchannel)
Range: 
0  to  7
*RST:
0
<TSCsetOthSubch>
TSC set to be used for the virtual second VAMOS user (other subchannel)
Range: 
1  to  2
*RST:
2
<SubchPowImbRat>
Subchannel power imbalance ratio, i.e. power of VAMOS subchannel 0 relative to subchannel 1
Range: 
-15 dB  to  15 dB
*RST:
0 dB
Default unit: 
dB
<Profile>
SUSer |
 
 TUSer |
 
 TUDTx |
 
 ON |
 
 OFF
VAMOS profile, determines that the DL signal is generated for:
SUSer
: Single VAMOS user. There is no second VAMOS user (not even in DTX mode).
TUSer
: Two active VAMOS users. The downlink signal contains speech frames and signaling data for both users.
TUDTx
: Two VAMOS users, DUT active, second user in DTX mode. The downlink signal contains speech frames for the DUT only. For the virtual user DTX is transmitted.
OFF (ON)
 disables (enables) the profile.
*RST:
TUS
Example: 
See 
"Configuring VAMOS Support"
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KS203
Manual operation: 
See 
"Active Subchannel"
Top