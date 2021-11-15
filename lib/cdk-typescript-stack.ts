
import * as cdk from '@aws-cdk/core';
import * as lambda  from '@aws-cdk/aws-lambda';
import * as ec2 from '@aws-cdk/aws-ec2'; 
import * as iam from '@aws-cdk/aws-iam';
import { Names } from '@aws-cdk/core';




export class CdkTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });


    const AJ_VPC = new ec2.Vpc(this, 'VPC', {
      cidr: "192.168.1.0/24",
      natGateways: 0,
      maxAzs: 2,
      subnetConfiguration: [ec2.subnetconfiguration( 'PUBLIC',ec2.SubnetType.PUBLIC,)]

      
    })
    //const PublicSecurityGroup = new ec2.SecurityGroup()
      //ENTER CODE

    }

     amazon_linux = ec2.MachineImage.latestAmazonLinux{
        generation:ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
        edition:ec2.AmazonLinuxEdition.STANDARD,
        virtualization:ec2.AmazonLinuxVirt.HVM,
        storage:ec2.AmazonLinuxStorage.GENERAL_PURPOSE

     }
        
     instance:ec2.Instance

    


  //instance = ec2.Instance(self, "Instance",
     // instance_type=ec2.InstanceType("t3.nano"),
     // machine_image=amzn_linux,
     // vpc = vpc,
     // security_group=publicSecurityGroup,
     // instance_name="EC2Sample",
     // key_name="ec2sample"   
    

    
  }

