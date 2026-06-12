# PRACH and Initial PUSCH Power

Module: LTE Signaling
Source: d0db14fb8fb646d6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
PRACH and Initial PUSCH Power
The following commands define parameters related to PRACH and initial PUSCH power configuration.
List of Commands
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:EASettings
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:EASettings
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:EASettings
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:EASettings
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:OLNPower
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:OLNPower
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:OLNPower
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:OLNPower
SENSe:LTE:SIGN<i>:UL:SETA:APPower:RSPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:RSPower:BASic?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:RSPower:BASic?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:RSPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PIRPower:BASic?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PIRPower:BASic?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PIRPower:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:BASic?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PNPusch:BASic?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PNPusch:BASic?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PNPusch:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:BASic?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PCALpha:BASic?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PCALpha:BASic?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PCALpha:BASic?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:BASic?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:TPRRcsetup:BASic?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:TPRRcsetup:BASic?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:TPRRcsetup:BASic?
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:RSPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:RSPower:ADVanced
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:RSPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:RSPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PIRPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PIRPower:ADVanced
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PIRPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PIRPower:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PNPusch:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PNPusch:ADVanced
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PNPusch:ADVanced
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PNPusch:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:PCALpha:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:PCALpha:ADVanced
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:PCALpha:ADVanced
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:PCALpha:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETA:APPower:TPRRcsetup:ADVanced
CONFigure:LTE:SIGN<i>:UL:SETB:APPower:TPRRcsetup:ADVanced
CONFigure:LTE:SIGN<i>:UL[:PCC]:APPower:TPRRcsetup:ADVanced
CONFigure:LTE:SIGN<i>:UL:SCC<c>:APPower:TPRRcsetup:ADVanced
SENSe:LTE:SIGN<i>:UL:SETA:APPower:PATHloss?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:PATHloss?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:PATHloss?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:PATHloss?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:EPPPower?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:EPPPower?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:EPPPower?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:EPPPower?
SENSe:LTE:SIGN<i>:UL:SETA:APPower:EOPower?
SENSe:LTE:SIGN<i>:UL:SETB:APPower:EOPower?
SENSe:LTE:SIGN<i>:UL[:PCC]:APPower:EOPower?
SENSe:LTE:SIGN<i>:UL:SCC<c>:APPower:EOPower?
Top