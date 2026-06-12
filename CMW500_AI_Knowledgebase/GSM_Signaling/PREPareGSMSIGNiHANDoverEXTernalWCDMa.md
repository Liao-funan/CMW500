# PREPareGSMSIGNiHANDoverEXTernalWCDMa

Module: GSM Signaling
Source: f6daf9341a834abf.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
External Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:EXTernal:WCDMa
PREPare:GSM:SIGN<i>:HANDover:EXTernal:WCDMa 
<Band>, <DLChannel>
Configures the destination parameters for handover to a WCDMA destination at another instrument.
Parameters:
<Band>
OB1 |
 
 OB2 |
 
 OB3 |
 
 OB4 |
 
 OB5 |
 
 OB6 |
 
 OB7 |
 
 OB8 |
 
 OB9 |
 
 OB10 |
 
 OB11 |
 
 OB12 |
 
 OB13 |
 
 OB14 |
 
 OB19 |
 
 OB20 |
 
 OB21 |
 
 OBS1 |
 
 OBS2 |
 
 OBS3 |
 
 OBL1 |
 
 OB22 |
 
 OB25 |
 
 OB26
OB1, ..., OB14
: operating band I to XIV
OB19, ..., OB22
: operating band XIX to XXII
OB25
: operating band XXV
OB26
: operating band XXVI
OBS1
: operating band S
OBS2
: operating band S 170 MHz
OBS3
: operating band S 190 MHz
OBL1
: operating band L
*RST:
OB1
<DLChannel>
Downlink channel number
Range: 
412 to 11000, depending on operating band, see table below
*RST:
10563
Example: 
See 
"Performing a CS Handover to Another Instrument"
Firmware/Software: 
V3.2.70
V3.7.10 added <Band> 
OB26
Manual operation: 
See 
"Destination Parameters"
Channel numbers
Operating band
Channel number
OB1
10562 to 10838
OB2
412 to 687 (step 25), 9662 to 9938
OB3
1162 to 1513
OB4
1537 to 1738, 1887 to 2087 (step 25)
OB5
1007, 1012, 1032, 1037, 1062, 1087, 4357 to 4458
OB6
1037, 1062, 4387 to 4413
OB7
2237 to 2563, 2587 to 2912 (step 25)
OB8
2937 to 3088
OB9
9237 to 9387
OB10
3112 to 3388, 3412 to 3687 (step 25)
OB11
3712 to 3787
OB12
3842 to 3903, 3932, 3957, 3962, 3987, 3992
OB13
4017 to 4043, 4067, 4092
OB14
4117 to 4143, 4167, 4192
OB19
712 to 763, 787, 812, 837
OB20
4512 to 4638
OB21
862 to 912
OB22
4662 to 5038
OB25
5112 to 5413, 6292 to 6592 (step 25)
OB26
5762 to 5913, 5937, 5962, 5987, 5992, 6012, 6017, 6037, 6042, 6062, 6067, 6087
OBS1
10912 to 10988
OBS2
10900 to 10950
OBS3
10950 to 11000
OBL1
7637 to 7783, 7788 to 7933
Top