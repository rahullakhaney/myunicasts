module ApplicationHelper
  class HTMLwithPygments < Redcarpet::Render::HTML
    def block_code(code, language)
      Pygments.highlight(code, lexer: language)
    end
  end
  def markdown(content)
    renderer = HTMLwithPygments.new(hard_wrap: true, filter_html: true)
    options = {
      autolink: true,
      no_intra_emphasis: true,
      disble_indented_code_blocks: true,
      fenced_code_blocks: true,
      lax_html_blocks: true,
      strikethrough: true,
      superscript: true
    }
    Redcarpet::Markdown.new(renderer, options).render(content).html_safe
  end
  
ALERT_TYPES = [:blue, :green, :orange, :red] unless const_defined?(:ALERT_TYPES)
    def snap_flash(options = {})
        flash_messages = []
        flash.each do |type, message|
          next if message.blank?

          type = type.to_sym
          type = :blue if type == :info
          type = :green if type == :notice
          type = :orange  if type == :alert
          type = :red  if type == :error

          next unless ALERT_TYPES.include?(type)
          Array(message).each do |msg|
            flash_messages << "ohSnap('#{msg}', {color: '#{type.to_s}', duration: '7000'});" if msg
          end
        end
        javascript_tag flash_messages.join("\n").html_safe
    end

end
