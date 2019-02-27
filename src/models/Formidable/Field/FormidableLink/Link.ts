import { IsUrl, IsString, IsOptional, MinLength } from 'class-validator';

export class Link implements Link {

    @IsUrl({
        require_tld: false,
        allow_protocol_relative_urls: true
    })
    @IsOptional()
    public href?: string | null;

    @IsString()
    @MinLength(1)
    @IsOptional()
    public text?: string | null;
}
