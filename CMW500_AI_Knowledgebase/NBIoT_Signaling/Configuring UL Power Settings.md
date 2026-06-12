# Configuring UL Power Settings

Module: NBIoT Signaling
Source: ca6ba66c593941cb.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring UL Power Settings
Configuring UL Power Settings
// *****************************************************************************
// Define the uplink nominal power directly (basic UL power configuration).
// Query the resulting parameter values signaled to the UE.
// *****************************************************************************
CONFigure:NIOT:SIGN:UL:NPUSch:ULNPower -30.5
SENSe:NIOT:SIGN:UL:ADPower:ENPPpower?
SENSe:NIOT:SIGN:UL:ADPower:EFNPower1?
SENSe:NIOT:SIGN:UL:ADPower:EFNPower2?
// *****************************************************************************
// Alternatively, enable advanced UL power configuration,
// define the parameter values to be signaled to the UE and
// query values calculated from the parameters.
// *****************************************************************************
CONFigure:NIOT:SIGN:UL:ADPower:ENABle ON
CONFigure:NIOT:SIGN:UL:ADPower:NRSPower 10
CONFigure:NIOT:SIGN:UL:ADPower:PIRPower -100
CONFigure:NIOT:SIGN:UL:ADPower:PNNPusch -80
CONFigure:NIOT:SIGN:UL:ADPower:PCALpha DOT7
SENSe:NIOT:SIGN:UL:ADPower:PATHloss?
SENSe:NIOT:SIGN:UL:ADPower:ENPPpower?
SENSe:NIOT:SIGN:UL:ADPower:EFNPower1?
SENSe:NIOT:SIGN:UL:ADPower:EFNPower2?
// *****************************************************************************
// Define maximum allowed UE power.
// *****************************************************************************
CONFigure:NIOT:SIGN:UL:PMAX 3
Top