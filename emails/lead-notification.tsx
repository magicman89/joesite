import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Column,
    Row,
    Tailwind,
} from "@react-email/components";
import * as React from "react";
import type { LeadFormData } from "@/lib/validations";
import { coverageAmountLabels } from "@/lib/validations";

export default function LeadNotificationEmail(props: LeadFormData) {
    const {
        first_name,
        email,
        phone,
        zip_code,
        date_of_birth,
        gender,
        has_insurance,
        tobacco_use,
        coverage_amount,
        lead_source,
        utm_source,
        utm_medium,
        utm_campaign,
        page_url,
    } = props;

    const previewText = `New Lead: ${first_name} looking for ${coverage_amount ? coverageAmountLabels[coverage_amount as keyof typeof coverageAmountLabels] : 'coverage'}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New Lead Received 🔥
                        </Heading>

                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Lead Source:</strong> {lead_source}
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Section>
                            <Heading as="h3" className="text-lg font-bold">Contact Info</Heading>
                            <Row>
                                <Column>
                                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                                        Name
                                    </Text>
                                    <Text className="text-black text-[14px] leading-[24px] font-semibold">
                                        {first_name}
                                    </Text>
                                </Column>
                                <Column>
                                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                                        Phone
                                    </Text>
                                    <Text className="text-black text-[14px] leading-[24px] font-semibold">
                                        <a href={`tel:${phone}`} className="text-blue-600 underline">{phone}</a>
                                    </Text>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                                        Email
                                    </Text>
                                    <Text className="text-black text-[14px] leading-[24px] font-semibold">
                                        <a href={`mailto:${email}`} className="text-blue-600 underline">{email}</a>
                                    </Text>
                                </Column>
                                <Column>
                                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                                        Zip Code
                                    </Text>
                                    <Text className="text-black text-[14px] leading-[24px] font-semibold">
                                        {zip_code}
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Section>
                            <Heading as="h3" className="text-lg font-bold">Qualification Data</Heading>

                            <Text className="m-0 text-[#666666] text-[12px] uppercase tracking-wider">
                                Desired Coverage
                            </Text>
                            <Text className="m-0 mb-4 text-black text-[16px] font-bold">
                                {coverage_amount ? coverageAmountLabels[coverage_amount as keyof typeof coverageAmountLabels] : 'N/A'}
                            </Text>

                            <Row>
                                <Column>
                                    <Text className="m-0 text-[#666666] text-[12px]">Current Insurance</Text>
                                    <Text className="m-0 mb-2 font-semibold capitalize">{has_insurance}</Text>
                                </Column>
                                <Column>
                                    <Text className="m-0 text-[#666666] text-[12px]">Tobacco Use</Text>
                                    <Text className="m-0 mb-2 font-semibold capitalize">{tobacco_use}</Text>
                                </Column>
                            </Row>

                            <Row>
                                <Column>
                                    <Text className="m-0 text-[#666666] text-[12px]">Date of Birth</Text>
                                    <Text className="m-0 mb-2 font-semibold">{date_of_birth}</Text>
                                </Column>
                                <Column>
                                    <Text className="m-0 text-[#666666] text-[12px]">Gender</Text>
                                    <Text className="m-0 mb-2 font-semibold capitalize">{gender}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Section>
                            <Heading as="h3" className="text-sm font-bold text-gray-500">Tracking Info</Heading>
                            <Text className="text-[12px] text-gray-500 m-0">
                                Source: {utm_source || "Direct"}
                            </Text>
                            <Text className="text-[12px] text-gray-500 m-0">
                                Medium: {utm_medium || "N/A"}
                            </Text>
                            <Text className="text-[12px] text-gray-500 m-0">
                                Campaign: {utm_campaign || "N/A"}
                            </Text>
                            <Text className="text-[12px] text-gray-500 m-0 mt-2 break-all">
                                Page: {page_url}
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
