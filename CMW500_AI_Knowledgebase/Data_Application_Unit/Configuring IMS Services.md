# Configuring IMS Services

Module: Data Application Unit
Source: 56e36c8a746f4f98.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring IMS Services
Configuring IMS Services
Using an external IMS server
// *****************************************************************************
// Specify that an external IMS server shall be used and configure the
// IPv4 and IPv6 addresses of the external P-CSCF.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:SUSage EXTernal
CONFigure:DATA:CONTrol:IMS2:EXTern:PCSCf:ADDRess:IPVFour '10.121.10.85'
CONFigure:DATA:CONTrol:IMS2:EXTern:PCSCf:ADDRess:IPVSix 'fcb1:cafe:1:c1::1'
The remaining commands in this section are only relevant if the internal IMS server is used.
Using the internal IMS server
// *****************************************************************************
// Specify that the internal IMS server shall be used,
// configure the UDP/TCP threshold and enable keep-alive messages.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:SUSage INTernal
CONFigure:DATA:CONTrol:IMS2:TRANsport:SELection CUSTom
CONFigure:DATA:CONTrol:IMS2:THReshold:VALue 1000
CONFigure:DATA:CONTrol:IMS2:TCPalive ON
// *****************************************************************************
// Configure the conference server:
// Set maximum number of virtual participants, query list of server addresses,
// add a server address, remove a server address.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:CONFerence:MAX:PARTicipant 5
SENSe:DATA:CONTrol:IMS2:CONFerence:FACTory:LIST?
CONF:DATA:CONT:IMS2:CONFerence:FACTory:ADD "sip:conference-factory@my.home.net"
CONF:DATA:CONT:IMS2:CONF:FACT:DELete "sip:conference-factory1@mrfc1.home1.net"
Configuring P-CSCF profiles
// *****************************************************************************
// Configure the first IPv4 P-CSCF so that it rejects requests
// with failure code 500.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:PCSCf1:BEHaviour FAILure
CONFigure:DATA:CONTrol:IMS2:PCSCf1:FAILurecode 500
CONFigure:DATA:CONTrol:IMS2:PCSCf1:RETRyafter 0
// *****************************************************************************
// Create a new IPv4 P-CSCF that accepts requests.
// As there are two default profiles, the new profile is number 3.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:PCSCf:ADD
CONFigure:DATA:CONTrol:IMS2:PCSCf3:IPADdress '172.22.1.205'
CONFigure:DATA:CONTrol:IMS2:PCSCf3:BEHaviour NORMal
CONFigure:DATA:CONTrol:IMS2:PCSCf3:REGexp 1, 1800, 60000
CONFigure:DATA:CONTrol:IMS2:PCSCf3:SUBexp 1, 1800, 60000
// *****************************************************************************
// Update the P-CSCF profile database and query a list of all profile names.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:PCSCf:CREate
SENSe:DATA:CONTrol:IMS2:PCSCf:CATalog?
Configuring subscriber profiles
// *****************************************************************************
// Configure the first subscriber profile compatible to the DUT.
// *****************************************************************************
CONF:DATA:CONTrol:IMS2:SUBScriber1:PRIVateid '001010123456789@test.3gpp.com'
CONF:DATA:CONTrol:IMS2:SUBScriber1:AUTHenticati:SCHeme AKA1
CONF:DATA:CONTrol:IMS2:SUBScriber1:AUTHenticati:ALGorithm MIL
CONF:DATA:CONTrol:IMS2:SUBScriber1:AUTHenticati:KEY '0x000102030405060708090a0b0c0d0e0f' 
CONF:DATA:CONTrol:IMS2:SUBScriber1:AUTHenticati:AMF '0x0000'
CONF:DATA:CONTrol:IMS2:SUBScriber1:AUTHenticati:OPC '0xcb9dcdc5b9258e6dca4760379fb82581'
CONF:DATA:CONTrol:IMS2:SUBScriber1:IPSec:ENABle ON
CONF:DATA:CONTrol:IMS2:SUBScriber1:IPSec:ALGorithm:INTegrity HMSH
CONF:DATA:CONTrol:IMS2:SUBScriber1:IPSec:ALGorithm:ENCRyption DES
CONF:DATA:CONT:IMS2:SUBS:PUBL2 'sip:001010123456789@ims.mnc001.mcc001.3gppnetwork.org'
CONF:DATA:CONT:IMS2:SUBS:PUBLicuserid3 'sip:+11234567890@test.3gpp.com'
CONF:DATA:CONT:IMS2:SUBS:PUBLicuserid4 'sip:user@test.3gpp.com'
CONF:DATA:CONTrol:IMS2:SUBScriber1:CHATqci 11
CONF:DATA:CONTrol:IMS2:SUBScriber1:IMPU:HEADer RECoge
// *****************************************************************************
// Update the subscriber profile database and query a list of all profile names.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:SUBScriber:CREate
SENSe:DATA:CONTrol:IMS2:SUBScriber:CATalog?
Configuring virtual subscriber profiles
// *****************************************************************************
// Configure the first virtual subscriber profile compatible to the DUT.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:BEHaviour ANSWer
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:FWDCall:AFTer 3
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SIGNalingtyp NOPRecondit
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:BEARer ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SUPPorted:FEATures:SESSionmode ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SUPPorted:FEATures:STANdalone ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SUPPorted:FEATures:VIDeo ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SUPPorted:FEATures:FILetransfer ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SESSion:USAGe ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SESSion:MINSe 100
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:SESSion:EXPiry 1500 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:FORCemocall ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:ADCodec:TYPE WIDeband
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:AMR:ALIGnment OCTetaligned
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:AMR:CODec3:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:AMR:CODec5:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:AMR:CODec7:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:STARtmode EPRimary
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:HFONly BOTH
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:DTX ENABle
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:DTXRecv ENABle
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:CODec3:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:CODec5:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:CODec7:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:SYNCh:SELect COMMon
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:BWCommon NBWB
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:COMMon:BITRate:RANGe R59, R1280
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:CMR ENABle
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:EVS:CHAWmode NP
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:VIDeo:CODec H264
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:VIDeo:ATTRibutes ''
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MEDiaendpoin LOOP
// *****************************************************************************
// Create a new virtual subscriber using the audio board as media endpoint.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub:ADD
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:ID 'sip:audio@test.3gpp.com'
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:SIGNalingtyp NOPRecondit
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:ADCodec:TYPE WIDeband
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:AMR:ALIGnment OCTetaligned
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:AMR:CODec3:ENABle ON
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:MEDiaendpoin AUD
CONFigure:DATA:CONTrol:IMS2:VIRTualsub2:AUDioboard:CONF INST1, ON, TWO, TWO, SDP
// *****************************************************************************
// Update the virtual subscriber profile database and query a list of all
// profile names.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub:CREate
SENSe:DATA:CONTrol:IMS2:VIRTualsub:CATalog?
Starting the internal IMS server and registering a DUT
The following assumes that a cell signal is available. You can, for example, use the LTE signaling application to provide an LTE cell signal. The DUT registers first to the LTE cell, then to the IMS.
// *****************************************************************************
// Start the internal IMS server.
// *****************************************************************************
SOURce:DATA:CONTrol:IMS2:STATe ON
// *****************************************************************************
// Switch the DUT on and wait until it has registered to the IMS server.
// You can for example query the information in the "Info" area until it
// reports successful registration. Or insert a pause into your script.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:GINFo?
Performing a mobile-terminating voice over IMS call
// *****************************************************************************
// Configure additional call settings for virtual subscriber 1.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:VIRTualsub1:MTCall:DESTination:LIST?
CONF:DATA:CONTrol:IMS2:VIRTualsub1:MTCall:DESTination '[1] LTE1 - subscriber 1'
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTCall:TYPE AUDio
// *****************************************************************************
// Initiate the call.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTCall:CALL
Updating an established call
// *****************************************************************************
// "Outband" update: Select a call, modify the settings and trigger the update.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:UPDate:CALL:ID '4Mjh7g2CFmd0pMG9Gi93j-8lyly7fzPA'
CONFigure:DATA:CONTrol:IMS2:UPDate:ADCodec:TYPE WIDeband
CONFigure:DATA:CONTrol:IMS2:UPDate:AMR:ALIGnment OCT
CONFigure:DATA:CONTrol:IMS2:UPDate:AMR:CODec8:ENABle ON
CONFigure:DATA:CONTrol:IMS2:UPDate:CALL:TYPE VIDeo
CONFigure:DATA:CONTrol:IMS2:UPDate:VIDeo:CODec H264
CONFigure:DATA:CONTrol:IMS2:UPDate:PERForm
// *****************************************************************************
// "Inband" update: Select a call, configure the CMR and trigger the update.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:UPDate:CALL:ID '4Mjh7g2CFmd0pMG9Gi93j-8lyly7fzPA'
CONFigure:DATA:CONTrol:IMS2:UPDate:INBand:AMRWb:CODec:RATes R1985
CONFigure:DATA:CONTrol:IMS2:UPDate:INBand:REPetition ONCE
CONFigure:DATA:CONTrol:IMS2:UPDate:INBand:PERForm
Updating a chat
// *****************************************************************************
// Define a chat message and send it to the DUT.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:UPDate:RCS:CHAT:TEXT "Hello world!"
CONFigure:DATA:CONTrol:IMS2:UPDate:RCS:CHAT:PERForm
// *****************************************************************************
// Toggle the "isComposing" status:
// Send "active" notification. Send "idle" notification.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:UPDate:RCS:COMPsng:NTFCn
CONFigure:DATA:CONTrol:IMS2:UPDate:RCS:IDLE:NTFCn
Releasing a call
// *****************************************************************************
// Query a list of all established calls and release one call.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:RELease:LIST?
CONFigure:DATA:CONTrol:IMS2:RELease:CALL:ID '4Mjh7g2CFmd0pMG9Gi93j-8lyly7fzPA'
Sending a short message over IMS to the DUT
// ***************************************************************************** 
// Configure the short message.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:VIRTualsub1:MTSMs:DESTination:LIST?
CONF:DATA:CONTrol:IMS2:VIRTualsub1:MTSMs:DESTination '[1] LTE1 - subscriber 1'
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTSMs:TYPE GPP
CONF:DATA:CONT:IMS2:VIRTualsub1:MTSMs:TEXT 'Testing SMS 012!.#\*%+-/()<>=;@$,'
// *****************************************************************************
// Send the message.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTSMs:SEND
// *****************************************************************************
// Query the event log contents.
// Query details for one event log entry.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:EVENts?
SENSe:DATA:CONTrol:IMS2:HISTory? 'Id.3880694434@fc01:abab:cdcd:efe0::1'
Transferring a file to the DUT
// ***************************************************************************** 
// Configure the file transfer.
// *****************************************************************************
SENSe:DATA:CONTrol:IMS2:VIRTualsub1:MTFiletfr:DESTination:LIST?
CONF:DATA:CONT:IMS2:VIRTualsub1:MTFiletfr:DESTination '[1] LTE1 - subscriber 1'
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTFiletfr:TYPE FILetransfer
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTFiletfr:CHUNksize 1000
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTFiletfr:FILE:SELection "myFile.zip"
// *****************************************************************************
// Transfer the file.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:VIRTualsub1:MTFiletfr:SEND
Deregistering a DUT
// ***************************************************************************** 
// Deregister the first DUT.
// *****************************************************************************
CONFigure:DATA:CONTrol:IMS2:MOBile1:DERegister
Top