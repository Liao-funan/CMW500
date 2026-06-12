# CONFigureWLANMEASiMEValuationLIMitMODulationHEOFdmEVMallTBCoderate

Module: WLAN Measurements
Source: b8b219c736fc43bd.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Limits: 802.11ax
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBCoderate
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:MODulation:HEOFdm:EVMall:TBCoderate 
<CR_BPSK>, <CR_QPSK>, <CR_16QAM>, <CR_64QAM>, <CR_256QAM>, <CR_1024QAM>
Specifies the coding rate of HE TB PPDU per modulation type, used for the calculation of unused tone error limit line.
Parameters:
<CR_BPSK>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
Coding rate for BPSK modulation type
CR14dcm
: 1/4 DCM (coding rate 1/2 with DCM)
CR38dcm
: 3/8 DCM (coding rate 3/4 with DCM)
CR12
: 1/2 (coding rate 1/2 without DCM)
CR23
: 2/3 (coding rate 2/3 without DCM)
CR34
: 3/4 (coding rate 3/4 without DCM)
CR56
: 5/6 (coding rate 5/6 without DCM)
<CR_QPSK>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
<CR_16QAM>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
<CR_64QAM>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
<CR_256QAM>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
<CR_1024QAM>
CR14dcm |
 
 CR38dcm |
 
 CR12 |
 
 CR23 |
 
 CR34 |
 
 CR56
Example: 
See 
"Specifying Modulation Limits (OFDM)"
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KM657
Top