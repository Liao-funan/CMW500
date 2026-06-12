# CONFigureWLANSIGNiCONNectionHOTSpotHSPar

Module: WLAN Signaling
Source: 20f0957e57a14b24.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Hotspot 2.0 Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:HSPar
CONFigure:WLAN:SIGN<i>:CONNection:HOTSpot:HSPar 
<AccessNetType>, <VenueGroup>, <VenueType>, <HESSID>, <VenueName>, <MCC>, <MNC>, <DomainName>, <OpFrieName>
Defines basic parameters of the Hotspot 2.0 operation mode.
Parameters:
<AccessNetType>
PNETwork |
 
 PNWGaccess |
 
 CPNetwork |
 
 FPNetwork |
 
 PDNetwork |
 
 ESONetwork |
 
 TOEXperiment |
 
 WILDcard
PNETwork
: private network
PNWGaccess
: private network with guest access
CPNetwork
: chargeable public network
FPNetwork
: free public network
PDNetwork
: personal device network
ESONetwork
: emergency services only network
TOEXperiment
: test or experimental
WILDcard
: wildcard
*RST:
PNET
<VenueGroup>
UNSPecified |
 
 ASSembly |
 
 BUSiness |
 
 EDUCational |
 
 FAINdustrial |
 
 INSTitutional |
 
 MERCantile |
 
 RESidential |
 
 STORage |
 
 UAMisc |
 
 VEHicular |
 
 OUTDoor
FAINdustrial
: factory and industrial
UAMisc
: utility and miscellaneous
*RST:
UNSP
<VenueType>
Range: 
0 to 255
*RST:
8
<HESSID>
Homogeneous extended service set identifier
Range: 
#H0  to  #HFFFFFFFFFFFF
*RST:
#H102030405
<VenueName>
String with up to 252 ASCII characters
*RST:
R&S
<MCC>
Mobile country code of 3GPP network reachable via the hotspot
To configure more than one PLMN, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
PLMN<no>
.
Range: 
1  to  999
*RST:
1
<MNC>
Mobile network code of 3GPP network reachable via the hotspot
To configure more than one PLMN, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
PLMN<no>
.
Range: 
1  to  999
1)
*RST:
1
<DomainName>
Domain name of the network operator as string
To configure more than one domain name, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
DNAMe<no>
.
<OpFrieName>
Friendly name of the network operator as string
*RST:
R&S
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS660
Manual operation: 
See 
"Access Network Type to Venue Name"
1)
 Depending on the MNC length setting, the maximum is 999 or 99, see 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
HOTSpot:
​
MNDigits
.
Top